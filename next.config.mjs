

const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year — stop reprocessing large PNGs on every request
    remotePatterns: [],
  },
}

export default nextConfig
