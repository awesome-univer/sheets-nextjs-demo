import { UniverPlugin } from '@univerjs/webpack-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    config.plugins.push(new UniverPlugin())

    return config
  },
};

export default nextConfig;
