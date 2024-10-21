/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/videos/',
            publicPath: '/_next/static/videos/',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  