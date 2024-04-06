const SUB_DIRECTORY = "/learn-and-check";
const isProd = process.env.NODE_ENV == "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? SUB_DIRECTORY : "",
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
  },
};

export default nextConfig;
