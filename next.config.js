/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['13.127.235.179'],
  },
  async rewrites(){
    return [
      {
        source: '/landing',
        destination: '/landing/index.html',
      }
    ]
  }
};