/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // The AI Music Masterclass now lives on its own domain.
        source: "/ai-music-masterclass",
        destination: "https://aimusicmasterclass.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
