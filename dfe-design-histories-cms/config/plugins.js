module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: "strapi-provider-upload-cloudcube-s3",
        providerOptions: {
          accessKeyId: env("CLOUDCUBE_ACCESS_KEY_ID"), // AWS S3 Access Key
          secretAccessKey: env("CLOUDCUBE_SECRET_ACCESS_KEY"), // AWS S3 Secret Key
          url: env("CLOUDCUBE_URL"), // AWS S3 Cloudcube URL - expected syntax : `https://${bucket}.s3.amazonaws.com/${cubename}`
        },
      },
    },
    // ...
  });