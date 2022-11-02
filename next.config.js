/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    if (!options.defaultLoaders) {
      throw new Error(
        "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
      );
    }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    const prefix = nextConfig.assetPrefix || "";
    const basePath = nextConfig.basePath || "";

    config.module.rules.push({
      test: /\.(mp4|webm|mov|ogg|swf|ogv)$/,
      use: [
        {
          loader: require.resolve("file-loader"),
          options: {
            publicPath: `${prefix || basePath}/_next/static/videos/`,
            outputPath: `${isServer ? "../" : ""}static/videos/`,
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: [
      "placeimg.com",
      "i.postimg.cc",
      "images.unsplash.com",
      "img.freepik.com",
    ],
  },
};

module.exports = nextConfig;
