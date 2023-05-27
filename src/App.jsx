
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import Main from './layouts/Main'
import Home from './components/Home/Home'
import Orders from './components/Orders/Orders'


function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:([
      {
        path:'/',
        loader: fetch('Tshirts.json'),
        element:<Home></Home>
      },
      {
        path:'/orders',
        element:<Orders></Orders>
      }
     
    ])
}
 ])
  return (
    <>
      <RouterProvider router ={router}></RouterProvider>
    </>
  )

}

export default App
