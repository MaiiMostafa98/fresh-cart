import React, { useState } from 'react'
import style from './Navbar2.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'




export default function Navbar2() {

  let { userToken , setUserToken } = useContext( UserContext )
  let navigate = useNavigate()
  

  function logout(){
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login')
  }


  return <>
 <div className='col-md-12'>
 <div className={style.nav1}>
      <div className='d-flex align-items-center ms-5'>
        <i className="fa-solid fa-cart-shopping me-2 fs-1 text-success " ></i>
        <h2 className='text-success'> FreshCart </h2>
      </div>


     
      <div className=''>
      <div className=' pt-3'>
        <ul className={style.ul}>

         { userToken != null ? <>
          <li className={style.li}>
            <Link className='link-underline link-underline-opacity-0 text-black h6' to={'/'}>Home</Link> 
          </li>
          <li className={style.li}> 
          <Link className='link-underline link-underline-opacity-0 text-black h6' to={'categories'}>Categories</Link> 
          </li>
          <li className={style.li}>
          <Link className='link-underline link-underline-opacity-0 text-black h6' to={'products'}>Products</Link> 
          </li>
          <li className={style.li}>
          <Link className='link-underline link-underline-opacity-0 text-black h6' to={'Brands'}>Brands</Link> 
          </li>
          <li className={style.li}>
          <Link className='link-underline link-underline-opacity-0 text-black h6' to={'cart'}>Cart</Link> 
          </li>
          <li className={style.li}>
          <Link className='link-underline link-underline-opacity-0 text-black h6' to={'wish list'}>Wish List</Link> 
          </li>
          </> : '' }
          
        </ul>
      </div>
      </div>

      <div className='  me-3'>
      <div className='d-flex align-items-center  pt-3'>
        
        <ul className={style.ul}>
        <li className={style.li}>
          <i className="fa-solid fa-cart-shopping me-4 fs-4 " ></i>
        </li>
  
         { userToken != null ? <>
          
          <li className={style.li}>
            <span className={style.span} onClick={logout}> Logout </span>
          </li>

         </> : <>
         <li className={style.li}>
            <Link className='link-underline link-underline-opacity-0 text-black h6' to={'registration'}>Register</Link> 
          </li>
          <li className={style.li}>
            <Link className='link-underline link-underline-opacity-0 text-black h6' to={'Login'}>Login</Link> 
          </li>
         </> }

          
          
        </ul>
      </div>
      </div>
      
      
  </div>
 </div>
  </>
}
