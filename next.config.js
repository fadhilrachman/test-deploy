/** @type {import('next').NextConfig} */
const path = require("path");

// import './src/styles/App.scss'

const nextConfig = {
  images: {
    domains: ["escrow.staging.arnatech.id", "lh3.googleusercontent.com"],
    disableStaticImages: true,
    formats: ["image/avif", "image/webp"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // reactStrictMode: false, //render becoming hit twice becouse of strict mode true
  env: {
    API_URL: process.env.API_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL_LOCAL: process.env.API_URL_LOCAL,
    COOKIE_NAME: process.env.COOKIE_NAME,
  },
};

module.exports = nextConfig;
