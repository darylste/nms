/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dummyimage.com',
        port: '',
        pathname: '/260x260/93a49b/000000.jpg&text=Placeholder',
      },
    ],
  },
};

module.exports = nextConfig;
