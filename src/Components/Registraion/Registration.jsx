import React, { useState } from 'react'
import style from './Registration.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function Registration() {

   let [Loading , setLoading] = useState(false)
   let [apiError , setApiError] = useState(null)
   let navigate = useNavigate()


 async function registraionSubmit(values) {

   setLoading(true)
   let {data}= await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup' , values)
   .catch( (err)=>{setApiError(err.response.data.message)} ); 

   if(data.message == 'success'){
      setLoading(false);
      navigate('/login')
   }

  }


let validationSchema = Yup.object({
   name: Yup.string().required('Name is required').min(3, 'Min Length must be greater than 3 letters').max(20, 'Max Length must be less than 20 letters'),
   email: Yup.string().required('Email is required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter valid email'),
   password: Yup.string().required("Password is required").matches(/^[A-Z][a-z]+[0-9]+$/, 'Invalid Password ex: (Ahmed123)'),
   rePassword: Yup.string().required("This field is required").oneOf([Yup.ref("password")], "Password and rePassword must be the same"),
   phone: Yup.string().required('Phone number is required').matches(/^(01)[0125][0-9]{8}$/, 'Enter valid number'),
 })

  let formik = useFormik({
   initialValues : {
      name: "",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
   },validationSchema , onSubmit : registraionSubmit
  })


  return <>
  <div className='row'>
  <div className={style.test}>
     <div className='container py-2 ' >
       
     <div className={style.form}>
         <h3 className='mb-4'>Register Now</h3>
        <form onSubmit={formik.handleSubmit} >
           <label htmlFor='name' className={style.label} >Name :</label>
           <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type='text' id='name' name='name'  className={style.input}></input>
           {formik.errors.name && formik.touched.name? <h6 className={style.h6}>{formik.errors.name}</h6> : null}
         
           <label htmlFor='email' className={style.label} >E-mail :</label>
           <input onBlur={formik.handleBlur}  onChange={formik.handleChange}   type='email' id='email' name='email'  className={style.input}></input>
           {formik.errors.email && formik.touched.email? <h6 className={style.h6}>{formik.errors.email}</h6> : null}

           <label htmlFor='password' className={style.label} >Password :</label>
           <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type='password' id='password' name='password'  className={style.input}></input>
           {formik.errors.password && formik.touched.password? <h6 className={style.h6}>{formik.errors.password}</h6> : null}

           <label htmlFor='rePassword' className={style.label} > re-Password :</label>
           <input onBlur={formik.handleBlur}  onChange={formik.handleChange} type='password' id='rePassword' name='rePassword'  className={style.input}></input>
           {formik.errors.rePassword && formik.touched.rePassword? <h6 className={style.h6}>{formik.errors.rePassword}</h6> : null}

           <label htmlFor='phone' className={style.label} > Phone :</label>
           <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type='tel' id='phone' name='phone'  className={style.input}></input>
           {formik.errors.phone && formik.touched.phone? <h6 className={style.h6}>{formik.errors.phone}</h6> : null}
           
           {Loading?<button  className={style.btn} type='button'> Loading... </button> : <button disabled={!(formik.isValid && formik.dirty)} className={style.btn} type='submit'> Register Now </button> }
           
           {apiError? <h2 className={style.h6}>{apiError}</h2> : null}
          

           <div className='mt-3'>
          <span className='h6'>You have an Account ?</span>
           <Link to={'/Registration'} className=' text-black h6 fw-bold'>  Login Now </Link>
          </div> 

        </form>
     </div>

     </div>
  </div>
  </div>
  </>

}
