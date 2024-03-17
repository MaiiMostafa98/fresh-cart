import React from 'react'
import style from './NotFound.module.css'


export default function NotFound() {
  return <>
   <div className='container  '>
      <div className='text-center py-5 mt-5'>
        <h1 className='pb-5 mt-5  fw-bolder text-body-secondary'> Oops! </h1>
        <h2 className='pb-5 text-body-tertiary'> 404 </h2>
        <h3 className='mb-5 text-body-tertiary'> PAGE NOT FOUND </h3>
      </div>
   </div>
  </>
}
