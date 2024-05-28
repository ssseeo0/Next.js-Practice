/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/movies/:id", // 리다이렉트를 처리할 주소
        destination: "/films/:id", // 이동시킬 주소
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
