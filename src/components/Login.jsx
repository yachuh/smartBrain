import { useState } from "react"
import { loginApi } from "../utils/api"
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Login = ({ onRouteChange, loadUser }) => {

  // React Hook Form
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email:'',
      password:''
    }
  });

  const onLoginSubmit = async (data) => {
    const loginData = data
    try {
      const { isSuccess, message, user } = await loginApi(loginData)
      if (!isSuccess) {
        console.log(message)
        MySwal.fire({
          title: 'Oops',
          text: message,
          icon: 'error'
        })
        return
      }
      if (user.id) {
        loadUser(user)
        onRouteChange('home')
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return(
    <>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
            Log in to your account
          </h1>
          {/* Login Form */}
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onLoginSubmit)}>
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
                {...register("email", {
                  required: "This is required.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                })}
              />
              <p className="text-red-400 text-xs mt-1">{errors.email?.message}</p>
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
                {...register("password", {
                  required: 'This is required.',
                  minLength: {
                    value: 6,
                    message: 'Password should be at least 6 characters.'
                  }
                })}
              />
              <p className="text-red-400 text-xs mt-1">{errors.password?.message}</p>
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full btn"
              disabled={!isDirty || !isValid}
            />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="inline-block font-medium text-primary-600 hover:underline dark:text-primary-500"
                onClick={() => onRouteChange('signin')}
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login