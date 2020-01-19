import Axios from 'axios'
export function request(config) {
  const instance = Axios.create({
    //联系我给你获得途径
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
    
  })

  return instance(config)
}