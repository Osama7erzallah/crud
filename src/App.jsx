import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Create from './components/users/Create.jsx'
import Details from './components/users/Details.jsx'
import Edit from './components/users/Edit.jsx'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Index />} ></Route>
      <Route path='/user/index' element={<Index/>}></Route>
      <Route path='/user/create' element={<Create/>}></Route>
      <Route path='/user/:id' element={<Details />}></Route>
      <Route path='/user/edit/:id' element={<Edit />}></Route>

      <Route path='*' element={<h1>ERROR</h1>}></Route>

    </Routes>
  )
}

export default App
