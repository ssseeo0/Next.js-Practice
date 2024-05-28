/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id", // 리다이렉트를 처리할 주소
        destination: "/items/:id", // 이동시킬 주소
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
