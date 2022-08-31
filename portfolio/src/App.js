import './App.css'
import Main from './components/main/Main'
import React from 'react'
import Dashboard from './components/dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/privateRoot/PrivateRoot'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
