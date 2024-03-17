import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetails() {
  
    const[ productsDetails , setProductDetails] = useState({})
    const[ loading , setLoading] = useState(true)
    let {id} = useParams()
    
    async function getProductDetails(id) {
        let {data} = await axios.get(` https://route-ecommerce.onrender.com/api/v1/products/${id}`);
        setProductDetails(data.data);
        setLoading(false)
    }
    
    useEffect(()=>{getProductDetails(id)} , [])

  return <>
  
  <h1 className={style.h1}> Product Details </h1>
  <div className='container'>
  { loading ? 
      <div className={style.loading}>
        <h2 className={style.h2}> Loading... </h2>  
      </div>
     : <div className={style.product}>
      <div className='row'>
       <div className='col-md-4 '>
            <img src={productsDetails.imageCover} className={style.img} alt={productsDetails.title}/>
         </div>
         <div className='col-md-8  '>
         <div className='container mt-5 pt-5'> 
         <span className='text-success h4 pt-5 mt-5'>{productsDetails.category.name}</span>
               <h3 className='h4 py-3'>{productsDetails.title}</h3>
               <div className='container d-flex justify-content-between pt-3'>
                <span className=' h3'> {productsDetails.price} <span className='text-success'> EGP </span> </span>
                <span className=' h3'> <i class="fa-solid fa-star text-warning"></i>  {productsDetails.ratingsAverage} </span>
               </div>
               <button className={style.btn}> Add to Cart </button>
         </div>
         </div>
         </div>
      </div>
  }
  </div>
  
  </>
  
}

