/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Enable WebAssembly support
      config.experiments = {
        asyncWebAssembly: true,
        syncWebAssembly: true,
        layers: true, // Optional: Helps with module layers
      };
  
      // Adding rules for WebAssembly files
      config.module.rules.push({
        test: /\.wasm$/,
        type: 'webassembly/async',
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  