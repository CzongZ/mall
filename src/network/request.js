import Axios from 'axios'
export function request(config) {
  const instance = Axios.create({
    // baseURL = "http://106.54.54.237:8000/api/v1", //备用接口
    baseURL: 'http://123.207.32.32:8000/api/v2',
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
    
  })

  return instance(config)
}