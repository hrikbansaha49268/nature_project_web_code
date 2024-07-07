/** @type {import('next').NextConfig} */
// https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'videos.pexels.com'
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com'
            }
        ]
    }
};

export default nextConfig;
