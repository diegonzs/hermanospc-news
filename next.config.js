const path = require('path');
const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'offlineCache',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200],
					},
				},
			},
		],
	},
	webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'/images': path.resolve(__dirname, 'public/images'),
		};
		return config;
	},
};

module.exports = withPlugins(
	[
		[optimizedImages, {}],
		[withOffline, {}],
	],
	nextConfig
);
