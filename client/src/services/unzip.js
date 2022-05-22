import axios from 'axios'

const baseURL = `http://localhost:3001`

export const uploadZip = file => {

  let headers = {
    'Content-Type': "multipart/form-data"
  }

  let data = new FormData()
  data.append("file", file)

  const req = axios.post(`${baseURL}/api/unzip`, data, {
    headers: headers
  })

  return req.then(res => res.data)
}