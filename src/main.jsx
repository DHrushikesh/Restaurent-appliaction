import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import Offers from './components/Offers.jsx'
import App from './App.jsx'
import Help from './components/Help.jsx'
import Body from './components/body.jsx'
import store from './assests/ReduxStore.js'
import Signin from './components/SignIn.jsx'
export const AppRouter =  createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children :[
    {
      path : "/",
      element: <Body/>      
    },
    {
      path : "/Offers",
      element: <Offers/>
    },
    {
      path : "/Help",
      element : <Help/>
    },
    { 
      path:"/SignIn",
      element:<Signin/>
    }
  ]
  }
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRouter}></RouterProvider>
    </Provider>
  </StrictMode>,
)
