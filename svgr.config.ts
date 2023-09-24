import { Configuration } from '@svgr/webpack';

const svgrConfig: Configuration = {
  // Add SVGR configuration options here
  svgProps: {
    xmlns: 'http://www.w3.org/2000/svg', // Add the xmlns attribute to avoid namespace errors
  },
  throwIfNamespace: false,

  // You can add more options here as needed
};

export default svgrConfig;
