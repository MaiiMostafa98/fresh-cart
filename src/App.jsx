import React, { useContext } from 'react'
import Login from './Components/Login/Login'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import NotFound from './Components/Notfound/NotFound'
import Brands from './Components/Brands/Brands'
import Categories from './Components/Categories/Categories'
import Cart from './Components/Cart/Cart'
import Products from './Components/Products/products'
import Registration from './Components/Registraion/Registration'
import Wishlist from './Components/Wish-list/Wishlist'
import Navbar2 from './Components/Navbar2/Navbar2'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './index.css';
import UserContextprovider, { UserContext } from './Context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Components/ProductDetails/ProductDetails'



export default function App() {

  let Routers = createHashRouter([
    { path : '' , element : <Layout/> , children : [
      { index : 'true'  , element : <ProtectedRoute> <Home/> </ProtectedRoute> },
      { path : 'brands'  , element : <ProtectedRoute> <Brands/> </ProtectedRoute>  },
      { path : 'Cart'  , element : <ProtectedRoute> <Cart/> </ProtectedRoute>  },
      { path : 'categories'  , element : <ProtectedRoute> <Categories/> </ProtectedRoute>  },
      { path : 'Products'  , element : <ProtectedRoute> <Products/> </ProtectedRoute>  },
      { path : 'Productdetails/:id'  , element : <ProtectedRoute> <ProductDetails/> </ProtectedRoute>  },
      { path : 'Wish list'  , element : <ProtectedRoute> <Wishlist/> </ProtectedRoute>  },
      { path : 'login'  , element : <Login/> },
      { path : 'registration'  , element : <Registration/> },
      { path : '*'  , element : <NotFound/> },
    ] }
  ])


  

  return <>
  
  <UserContextprovider>

     <RouterProvider router={Routers}></RouterProvider>

  </UserContextprovider>
 
  </>
}


