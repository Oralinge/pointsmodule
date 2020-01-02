const config = {
  projectA: {
    pages: {
      index: {
        entry: "src/projects/projectA/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    },
    devServer: {
      port: 8080, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      // 设置代理
      proxy: {
        "/eopenhapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
  common: {
    pages: {
      index: {
        entry: "src/projects/common/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    },
    devServer: {
      port: 8081, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      // 设置代理
      proxy: {
        "/eopenhapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
  projectB: {
    pages: {
      index: {
        entry: "src/projects/Bproject/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    },
    devServer: {
      port: 8082, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true,
      // 设置代理
      proxy: {
        "/eopenhapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        },
        "/hapi": {
          target: "http://open.jdpay.com",
          changeOrigin: true
        }
      }
    }
  },
  projectC: {}
};
module.exports = config;
