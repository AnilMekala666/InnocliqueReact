/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dgi4evce0",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:"d1mo2pu6",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig