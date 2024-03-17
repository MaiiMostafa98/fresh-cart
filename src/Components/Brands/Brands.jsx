import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios'

export default function Brands() {

  let [ brands , setBrands ] = useState([])
  let [ loading , setLoading ] = useState(true)

  async function getBrand(){
    let {data} = await axios('https://route-ecommerce.onrender.com/api/v1/brands');
    setBrands(data.data);
    setLoading(false);
  }
 
  useEffect( ()=>{getBrand()} , [])

  return <>
  <div className={style.container}>
  <h1 className={style.h1}> Brands </h1>
  {
    loading?
    <div className={style.loading}>
        <h2 className={style.h2}> Loading... </h2>  
      </div>
      : <div className='row mt-5'>
          {
            brands.map(brands =>
              <div className='col-sm-6 col-md-3'>
                 <div className={style.product} >
                   <img src={brands.image} className='w-100' alt={brands.name}/>
                 </div>      
              </div>
            )
          }
       </div>
  }
  </div>
  </>
}
