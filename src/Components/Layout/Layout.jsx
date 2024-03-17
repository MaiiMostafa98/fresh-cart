import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from '../Navbar2/Navbar2'
import { UserContext } from '../../Context/UserContext'


export default function Layout() {

  let {setUserToken} = useContext(UserContext)
  if(localStorage.getItem('userToken')){
    setUserToken(localStorage.getItem('userToken'))
  }


  return <>
  <Navbar2/>
  <Outlet></Outlet>
  </>
}
