import axios from 'axios'

const api = axios.create({
  baseURL: "https://backend.bmspedidos.com.br"
})

export { api }
