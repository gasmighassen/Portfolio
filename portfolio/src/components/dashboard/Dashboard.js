import React from 'react'
import AddProject from './AddProject'
import DashNav from './DashNav'
import ProjectList from './ProjectList'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <DashNav />
      <AddProject />
      <ProjectList />
    </div>
  )
}

export default Dashboard
