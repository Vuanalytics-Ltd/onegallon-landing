/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig



let assetPrefix = ''
let basePath = ''

let isGithubActions = process.env.ONEGALLON_ACTIONS || false

let images = {
  loader: 'default',
  
}

if (isGithubActions) {
  // trim off `<owner>/`
  let repo = process.env.ONEGALLON_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/onegallon-landing/`
  basePath = `/onegallon-landing`
  
  
  
}


const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: images,
};


module.exports = nextConfig
