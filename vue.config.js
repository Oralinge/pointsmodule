const config = require("./config/projectsConfig.js");
let projectName = process.env.PROJECT_NAME;

module.exports = {
  ...config[projectName],
  // pages: conf.pages,

  // 基本路径
  // baseUrl: './',//vue-cli3.3以下版本使用
  publicPath: "./", // vue-cli3.3+新版本使用

  // 输出文件目录
  outputDir: "dist/" + projectName + "/"
};
