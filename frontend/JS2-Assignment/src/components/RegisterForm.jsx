import { useFormik } from 'formik'
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';


const RegisterForm = () => {

  const { register } = useAuth()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async (values) => {
      console.log(values)
      const { error, success } = await register(values)

      if(error) {
        setError(error)
      }
      if(success) {
        setSuccess(success)
      }
    }
  })

  return (
    <form onSubmit={form.handleSubmit} className="mt-5 mr-5">
      <div className="mb-4 flex justify-between">
        <label htmlFor="email" id="email" className="w-1/3" >Email: </label>
        <input type="text" id="email" value={form.values.email} onChange={form.handleChange} className="border-2 border-black rounded-lg w-2/3 text-black" />
      </div>
      <div className="mb-4 flex justify-between">
        <label htmlFor="password" id="password" className="w-1/3" >Password: </label>
        <input type="text" id="password" value={form.values.password} onChange={form.handleChange} className="border-2 border-black rounded-lg w-2/3 text-black" />
      </div>
      <div className="mb-4 flex justify-between">
        <label htmlFor="repeatPassword" id="repeatPassword" className="w-1/3" >Repeat Password: </label>
        <input type="text" id="repeatPassword" value={form.values.repeatPassword} onChange={form.handleChange} className="border-2 border-black rounded-lg w-2/3 text-black" />
      </div>
      { error && <p className='text-red-600'> { error } </p>}
      { success && <p className='text-green-600'> { success } </p>}
      <button className="bg-blue-600 hover:bg-white hover:text-orange-600 transition-colors duration-200 mb-5 rounded-lg px-2" type='submit'>Create Account</button>
    </form>
  )
}
export default RegisterForm