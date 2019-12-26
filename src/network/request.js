import Axios from 'axios'
export function request(config) {
  const instance = Axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/w1', //接口1
    baseURL: 'http://106.54.54.237:8000/api/w1', //接口2
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
    
  })

  return instance(config)
}