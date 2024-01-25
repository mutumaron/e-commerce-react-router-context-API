
import './App.css';

import {RouterProvider,createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/root';
import ShopPage from './Pages/shop';
import ShopCategoryPage from './Pages/shop-category';
import ProductPage from './Pages/product';
import CartPage from './Pages/cart';
import AuthPage from './Pages/auth';
import menBanner from './Components/Assets/banner_mens.png';
import womenBanner from './Components/Assets/banner_women.png';
import kidsBanner from './Components/Assets/banner_kids.png';

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    id:'root',
    children: [
      {index:true, element:<ShopPage/>},
      {
        path:'men',
        element:<ShopCategoryPage banner={menBanner} category="men"/>
      },
      {
        path:'women',
        element:<ShopCategoryPage banner={womenBanner} category="women"/>
      },
      {
        path:'kids',
        element:<ShopCategoryPage banner={kidsBanner} category="kid"/>
      },
      {
        path:'product',
        element:<ProductPage/>,
        children:[
          {
            path:':productId',
            element:<ProductPage/>
          }
        ]
      },
      {
        path:'cart',
        element:<CartPage/>
      },
      {
        path:'login',
        element:<AuthPage/> 
      }
      
    ]

  }
]);


function App() {

  return <RouterProvider router={router}/>;
}

export default App;
