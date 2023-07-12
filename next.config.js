
module.exports = {
    images: {
        domains: ['assets.example.com', 'artdescriptions.s3.us-east-2.amazonaws.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'artdescriptions.s3.us-east-2.amazonaws.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
};
