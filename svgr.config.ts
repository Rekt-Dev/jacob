module.exports = {
  // Configure SVGR to not throw errors for SVG namespace tags
  svgoConfig: {
    plugins: [
      {
        removeViewBox: false,
      },
      {
        cleanupIDs: false,
      },
      {
        prefixIds: false,
      },
    ],
  },
  // Set throwIfNamespace to false to bypass the warning about namespace tags
  throwIfNamespace: false,
};
