/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig



const repo = 'onegallon-landing'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig