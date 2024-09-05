import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/naturefadao/real-vue', //后端或数据库给的数据
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents1() {
    return apiClient.get('/events')
  },
  getEvents(id) {
    return apiClient.get('/events/' + id)
  }
}
