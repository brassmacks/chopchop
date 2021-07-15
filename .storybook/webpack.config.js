

module.exports = async ({ config, mode}) => {
  config.stats = {
    errorDetails: TRUE
  };
  return config;
};