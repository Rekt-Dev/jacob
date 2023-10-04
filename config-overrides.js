const path = require('path');

module.exports = function override(config, env) {
  // Find the SVG rule in the Webpack configuration
  const svgRule = config.module.rules.find(rule => rule.test && rule.test.toString() === /\.(svg|ico)$/.toString());

  // Exclude the SVGR loader from the SVG rule
  svgRule.exclude = path.resolve(__dirname, 'src/assets');

  // Create a new rule for SVG files in the src/assets directory
  const assetsSvgRule = {
    test: /\.svg$/,
    include: path.resolve(__dirname, 'src/assets'),
    use: [
      {
        loader: require.resolve('svg-url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  };

  // Add the new SVG rule to the Webpack configuration
  config.module.rules.push(assetsSvgRule);

  // Modify SVGR loader to disable namespaces
  const svgrLoader = config.module.rules.find(rule => rule.loader && rule.loader.includes('svgr') && rule.options);

  if (svgrLoader) {
    svgrLoader.options = {
      ...svgrLoader.options,
      svgoConfig: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
          { prefixIds: false },
          // Add more SVGO config options as needed
        ],
      },
      // Disable SVG namespaces
      jsx: false,
    };
  }

  return config;
};
