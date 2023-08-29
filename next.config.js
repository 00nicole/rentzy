/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
    },
    images: {
        domains: [
            "https://lh3.googleusercontent.com"
        ]
    }
}

module.exports = nextConfig
