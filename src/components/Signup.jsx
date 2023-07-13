import { useState } from "react"
import { signupApi } from "../utils/api"

const Signup = ({ onRouteChange, loadUser }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onNameChange = (e) => {
    setUserData({...userData, name: e.target.value})
  }
  const onEmailChange = (e) => {
    setUserData({...userData, email: e.target.value})
  }
  const onPasswordChange = (e) => {
    setUserData({...userData, password: e.target.value})
  }

  const onSignupSubmit = async () => {
    try {
      const { isSuccess, message, data} = await signupApi(userData)
      if (!isSuccess) {
        console.log(message)
        return
      }
      console.log(data)
      loadUser(data)
      onRouteChange('home')
    } catch (error) {
      console.log(error)
    }
  }
  return(
    <>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
            Sign up a new account
          </h1>
          {/* Login Form */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required=""
                onChange={(e) => onNameChange(e)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
                onChange={(e) => onEmailChange(e)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                onChange={(e) => onPasswordChange(e)}
              />
            </div>
            <button
              type="submit"
              className="w-full btn"
              onClick={() => onSignupSubmit() }
            >
              Register
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="#"
                className="inline-block font-medium text-primary-600 hover:underline dark:text-primary-500"
                onClick={() => onRouteChange('login')}
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup