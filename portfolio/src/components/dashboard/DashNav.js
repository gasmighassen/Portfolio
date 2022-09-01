import React from 'react'
import './DashNav.css'
import { useDispatch } from 'react-redux'
import { userlogout } from '../../Redux/Slices/UserSlice'

function DashNav() {
  const dispatch = useDispatch()
  return (
    <div className="dashnav">
      <p>Dashboard</p>
      <button
        onClick={() => {
          dispatch(userlogout())
          window.location.reload()
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default DashNav
