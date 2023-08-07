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

  // assetPrefix = `/onegallon-landing/`
  // basePath = `/onegallon-landing`

  images['loader'] = 'imgix'
  images['loaderFile'] = './imgix.ts'
  
  
  
}


const nextConfig = {
  reactStrictMode: false,
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: images
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //     config.resolve.fallback.tls = false;
  //     config.resolve.fallback.net = false;
  //     config.resolve.fallback.child_process = false;
  //     config.resolve.fallback.http2 = false;
  //   }

  //   return config;
  // },
};


module.exports = nextConfig
