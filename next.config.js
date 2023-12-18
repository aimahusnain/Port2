/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")
const withPWA = require('next-pwa');

const nextConfig = {
    compiler:{
        removeConsole: true,
    }
};

module.exports = withContentlayer, withPWA(
    { ...nextConfig,
        pwa: {
            dest: "public",
            register: true,
            skipWaiting: true,
            disable: process.env.NODE_ENV === "development"
        }
    },
    );