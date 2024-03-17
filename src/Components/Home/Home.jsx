import React from 'react'
import style from './Home.module.css'
import FeaturedProduct from '../featuredProduct/FeaturedProduct'


export default function Home() {
  return <>
   <h1 className={style.h1}> Home </h1>
   <FeaturedProduct/>

  </>
}
