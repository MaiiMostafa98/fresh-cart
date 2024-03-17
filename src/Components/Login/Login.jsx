import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


export default function Login() {

  let [ Loading , setLoading ] = useState( false )
  let [ apiError , setApiError] = useState ( null )
  let navigate = useNavigate()
  let { setUserToken } = useContext(UserContext)

  
  async function loginSubmit(values){

    setLoading(true)

    let {data} =  await axios.post( 'https://route-ecommerce.onrender.com/api/v1/auth/signin' , values )
    .catch( (err)=> {setApiError(err.response.data.message)} )

    if(data.message=='success'){

      setLoading(false);

      localStorage.setItem('userToken' , data.token)

      setUserToken( data.token )

      navigate('/')

    }
  }

  let validationSchema = Yup.object({
    email: Yup.string().required('Email is required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter valid email'),
    password: Yup.string().required("Password is required").matches(/^[A-Z][a-z]+[0-9]+$/, 'Invalid Password ex: (Ahmed123)'),
  })


  let formik = useFormik({
    initialValues: {
        email:"",
        password:"",
    }, validationSchema  ,onSubmit : loginSubmit
  })

  return <>
  <div className='row'>
  <div className={style.test}>
     <div className='container py-2 ' >
       
     <div className={style.form}>
        <h3 className='mb-4'> Log in Now </h3>

        <form onSubmit={formik.handleSubmit} >
         
           <label htmlFor='email' className={style.label} >E-mail :</label>
           <input onBlur={formik.handleBlur}  onChange={formik.handleChange}   type='email' id='email' name='email'  className={style.input}></input>
           {formik.errors.email && formik.touched.email ? <h6 className={style.h6}>{formik.errors.email}</h6> : null}

           <label htmlFor='password' className={style.label} >Password :</label>
           <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type='password' id='password' name='password'  className={style.input}></input>
           {formik.errors.password && formik.touched.password ? <h6 className={style.h6}>{formik.errors.password}</h6> : null}

           { Loading? <button className={style.btn} type='button'> Loading... </button>  : <button disabled ={!(formik.isValid && formik.dirty)} className={style.btn} type='submit'> Login </button>  }
           
           {apiError? <h2 className={style.h6}>{apiError}</h2> : null}
         

          <div className='mt-3'>
          <span className='h6'>You don't have an Account ?</span>
           <Link to={'/Registration'} className=' text-black h6 fw-bold'>  Register Now </Link>
          </div>

        </form>
     </div>

     </div>
  </div>
  </div>
  </>
}
