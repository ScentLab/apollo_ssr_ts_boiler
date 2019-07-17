module.exports = {
  target: 'serverless',
  distDir: './build',
  exportPathMap: function () {
    return {
      '/': {
        page: '/'
      }
    };
  },
  generateBuildId: async () => process.env.BUILD_ID ?
    process.env.BUILD_ID : null
};
