/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
				port: '',
				pathname: '/**',
			},
		],
	},
    experimental: {
		serverActions: {
            allowedOrigins: ["localhost:3000", "psychic-space-journey-g5r444rw9jr296qq-3000.app.github.dev"]
        },
      }
}

export default nextConfig