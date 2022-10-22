const getBucketHostname = require("strapi-provider-upload-cloudcube-s3").getBucketHostname;
const cloudcubeBucketHostname = getBucketHostname(process.env.CLOUDCUBE_URL);
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives:{
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", "data:", "blob:", cloudcubeBucketHostname],
          'media-src': ["'self'", "data:", "blob:", cloudcubeBucketHostname],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
