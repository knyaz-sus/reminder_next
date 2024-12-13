/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/app",
        destination: "/app/today",
        permanent: false,
      },
      {
        source: "/auth",
        destination: "/auth/signin",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
