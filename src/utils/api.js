import axios from 'axios'

export const baseApiEndpoint = 'http://localhost:3000' //'https://smartbrain-api-1xik.onrender.com'
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
export const imageApi = (payload) => putApi(IMAGE, payload)