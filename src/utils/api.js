import axios from 'axios'

export const baseApiEndpoint = 'https://smartbrain-api-1xik.onrender.com' // 'http://localhost:3000'//
axios.defaults.baseURL = baseApiEndpoint

// URLs
const SIGNUP = '/signup'
const LOGIN = '/login'
const CLARIFAI_API= '/clarifaiapi'
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
export const callClarifaiApi = (payload) => postApi(CLARIFAI_API, payload)
export const submitImgApi = (payload) => putApi(IMAGE, payload)