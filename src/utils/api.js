import axios from 'axios'

const baseApiEndpoint = 'http://localhost:3000'
axios.defaults.baseURL = baseApiEndpoint

// URLs
const SIGNUP = '/signup'
const LOGIN = '/login'
const IMAGE = '/image'

/* ---- POST ---- */
const postApi = async (url, payload) => {
  const res = await axios.post(url, payload)
  return res.data
}
/* ---- PUT ---- */
const putApi = async (url, payload) => {
  const res = await axios.put(url, payload)
  return res.data
}

// APIs
export const signupApi = (payload) => postApi(SIGNUP, payload)
export const loginApi = (payload) => postApi(LOGIN, payload)
export const uploadImgApi = (payload) => putApi(IMAGE, payload)