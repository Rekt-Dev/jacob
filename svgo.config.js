module.exports = {
    multipass: true,
    plugins: [
      { removeUselessDefs: false },
      { cleanupIDs: false },
      { removeViewBox: false },
      { removeXMLNS: true }, // Remove XML namespace attributes
    ],
  };
  