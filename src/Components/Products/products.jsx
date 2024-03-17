import React from 'react'
import style from './Products.module.css'
import FeaturedProduct from '../featuredProduct/FeaturedProduct'

export default function products() {
  return <>
  <h1 className={style.h1}> All Products </h1>
  <FeaturedProduct></FeaturedProduct>
  </>
}