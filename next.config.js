const path = require('path');
const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');
const optimizedImages = require('next-optimized-images');


const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ]
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '/images': path.resolve(__dirname, 'public/images'),
    }
    return config;
  },
};

module.exports = withPlugins([
  [optimizedImages, {}],
  [withOffline, {}],
], nextConfig);