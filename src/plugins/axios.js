import axios from 'axios'

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.get('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
