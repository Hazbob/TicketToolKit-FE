/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        AUTH_RESEND_KEY: process.env.AUTH_RESEND_KEY
    }
};

export default nextConfig;
