module.exports = {
    svgProps: {
      xmlns: 'http://www.w3.org/2000/svg', // Add the xmlns attribute to avoid namespace errors
    },
    template: (_, { jsx }) => jsx,
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  };
  