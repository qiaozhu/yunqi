// 配置文件
const NODE_ENV = process.env.NODE_ENV;
console.log('this node_env is ' + NODE_ENV);

const config = {
  // 内网配置
  dev: {
    baseURL: 'http://192.168.11.20:8082/trade',
    uploadURL: 'http://192.168.0.202:9058',
    env: 'dev'
  },
  // 测试配置
  test: {
    baseURL: 'http://120.31.131.193:8140/trade',
    uploadURL: 'http://boot-servicetest.sijibao.com',
    env: 'test'
  },
  // 生产配置
  prod: {
    baseURL: 'http://120.131.82.40:8205/trade',
    uploadURL: 'https://boot-service.sijibao.com',
    env: 'prod'
  }
};

// 根据环境变量 导出对应配置
let envConfig = null;
if (NODE_ENV == 'development') {
  /**
   * 在开发模式下 为方便调试  开发者可自行修改ENV_TARGET_SERVER ajax访问不同目标服务器 默认dev
   * ENV_TARGET_SERVER：dev 开发服务器
   * ENV_TARGET_SERVER：test 测试服务器
   * ENV_TARGET_SERVER：prod 生产服务器
   */

  let envkey = localStorage.getItem('ENV_TARGET_SERVER') || 'dev';
  if (envkey != 'dev' && envkey != 'test' && envkey != 'prod') envkey = 'dev';

  envConfig = { ...config[envkey] };
} else {
  envConfig = process.env.VUE_APP_OUTPUTDIR == 'test' ? { ...config.test } : { ...config.prod };
}

export default envConfig;
