import axios from 'axios';

const instance = axios.create({ // 创建axios实例，在这里可以设置请求的默认配置
  timeout: 10000, // 设置超时时间10s
})

/* 统一封装get请求 */
const get = (url, params, config = {}) => new Promise((resolve, reject) => {
  instance({
    method: 'get',
    url,
    params,
    ...config
  }).then((res) => {
    resolve(res.data);
  }).catch((err) => {
    reject(err);
  })
})

export default get;
