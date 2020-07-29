/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

firebase.initializeApp({
	apiKey: 'AIzaSyAzue1D9WeLkY5t2norHFWKxvBoiZMueR8',
	projectId: 'hermanospc-news',
	messagingSenderId: '789269184530',
	appId: '1:789269184530:web:ddbbe80e1d44fdb61b18cb',
});

firebase.messaging();
