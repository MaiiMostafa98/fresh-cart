
import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Categories() {
  
  const[ categories , setCategories] = useState([])
  const[ loading , setLoading] = useState(true)

  async function getCategories(){
      let {data} = await axios.get(' https://route-ecommerce.onrender.com/api/v1/categories');
      setCategories(data.data);
      setLoading(false)
  }

  useEffect(()=>{getCategories()} , [])

  return <>

  <div className={style.container}>

  <h1 className={style.h1}> Categories </h1>
   { loading ? 
      <div className={style.loading}>
        <h2 className={style.h2}> Loading... </h2>  
      </div>
     : <div className='row mt-5'>
         {categories.map(category => 
           <div className='col-sm-6 col-md-3 '>
           <div className={style.product} >
               <img src={category.image} className={style.img} alt={category.image}/>
             <div>
               <h3 className='text-success py-3'>{category.name}</h3>
             </div>
            </div>
            
         </div>)}
       </div>
 
   }
  </div>
   
  </>


}
