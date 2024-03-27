import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './view/screen/LoginScreen'
import RegisterScreen from './view/screen/RegisterScreen'
import HomeScreen from './view/screen/HomeScreen'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path='/login' Component={LoginScreen} />
          <Route path='/register' Component={RegisterScreen} />
          <Route path='/' Component={HomeScreen} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)