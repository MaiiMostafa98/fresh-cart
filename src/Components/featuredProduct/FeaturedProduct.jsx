import React, { useEffect, useState } from 'react'
import style from './FeaturedProduct.module.css'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function FeaturedProduct() {

  const[ products , setProducts] = useState([])
  const[ loading , setLoading] = useState(true)
  let navigate = useNavigate()

  async function getProducts(){
      let {data} = await axios.get(' https://route-ecommerce.onrender.com/api/v1/products');
      setProducts(data.data);
      setLoading(false)
  }


  useEffect(()=>{getProducts()} , [])

 

  return <>


  <div className={style.container}>

  <input type='search' placeholder='Search...' className={style.search}></input>
   
   { loading ? 
      <div className={style.loading}>
        <h2 className={style.h2}> Loading... </h2>  
      </div>
     : <div className='row mt-5'>
         {products.map(product => 
           <div className='col-sm-6 col-md-4 col-lg-2'>
           <Link to={`/ProductDetails/${product.id}`}> 
           <div className={style.product} >
               <img src={product.imageCover} className='w-100' alt={product.title}/>
               <span className='text-success'>{product.category.name}</span>
               <h3 className='h5'>{product.title.split(' ').splice(0,2).join(' ')}</h3>
               <div className='container d-flex justify-content-between pt-3'>
                <span className='ps-3 h6'> {product.price} <span className='text-success'> EGP </span> </span>
                <span className='pe-3 h6'> <i class="fa-solid fa-star text-warning"></i>  {product.ratingsAverage} </span>
               </div>
               <button className={style.btn}> Add to Cart </button>
            </div>
           </Link>
         </div>)}
       </div>
 
   }
  </div>
   
  </>
}
