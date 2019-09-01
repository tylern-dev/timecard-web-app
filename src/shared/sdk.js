import axios from 'axios'

export const apiBaseUrl = process.env.REACT_APP_API_BASE // eslint-disable-line no-undef

export const axiosClient = axios.create({
  baseURL: apiBaseUrl,
  responseType: 'json'
})

export const setAuthToken = token => axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token

const get = (url, params) => {
  return axiosClient({
    url,
    method: 'get',
    params: {...params}
  })
}

const post = (url, data) => {
  return axiosClient({
    url,
    method: 'post',
    data: data
  })
}

const put = (url, data) => {
  return axiosClient({
    url,
    method: 'put',
    data: data
  })
}

const remove = (url, data) => {
  return axiosClient({
    url,
    method: 'delete'

  })
}
export default {
  auth: {
    login: (data) => post('/auth/login', data)
  }
}