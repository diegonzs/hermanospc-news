// @ts-nocheck
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const next = require('next');
const admin = require('firebase-admin');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Initiate firebase
const firebase = admin.initializeApp(
	{
		credential: admin.credential.cert(require('./credentials/server')),
	},
	'server'
);

app.prepare().then(() => {
	// Defined the server instance
	const server = express();

	// Middleware for parsing post request
	server.use(bodyParser.json());

	// Middleware to handle sessions
	server.use(
		session({
			secret: 'geheimnis',
			saveUninitialized: true,
			store: new FileStore({ secret: 'geheimnis' }),
			resave: false,
			rolling: true,
			cookie: { maxAge: 604800000 }, // week
		})
	);

	// Endpoint for offline
	// server.get('/service-worker.js', (req, res) => {
	// 	app.serveStatic(req, res, './.next/service-worker.js');
	// });

	// // Defined service workers
	// const serviceWorkers = [
	// 	{
	// 		filename: 'service-worker.js',
	// 		path: './.next/service-worker.js',
	// 	},
	// 	{
	// 		filename: 'firebase-messaging-sw.js',
	// 		path: './static/firebase-messaging-sw.js',
	// 	},
	// ];

	// // Create endpoints for each serviceworker
	// serviceWorkers.forEach(({ filename, path }) => {
	// 	server.get(`/${filename}`, (req, res) => {
	// 		app.serveStatic(req, res, path);
	// 	});
	// });

	// Save an instance of firebase in the req object
	server.use((req, res, next) => {
		req.firebaseServer = firebase;
		next();
	});

	// Endpoint for handle logins
	server.post('/api/login', (req, res) => {
		if (!req.body) return res.sendStatus(400);
		const token = req.body.token;
		firebase
			.auth()
			.verifyIdToken(token)
			.then((decodedToken) => {
				req.session.decodedToken = decodedToken;
				req.session.token = token;
				req.session.save();
				return decodedToken;
			})
			.then((decodedToken) => res.json({ status: true, decodedToken }))
			.catch((error) => res.json({ error }));
	});

	// Endpoint for handling logouts
	server.post('/api/logout', (req, res) => {
		req.session.decodedToken = null;
		req.session.token = null;
		req.session.save();
		res.json({ status: true });
	});

	// Let nextJS to take care of everything else
	server.get('*', (req, res) => {
		return handle(req, res);
	});

	// Turn on the server
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
