import React from 'react'
import '../css/dashboardFlow.css'


function DashboardFlow() {
  return (
    <div>
      <div className='main-head'>

        </div>
        <div className='notification'>
          <h>Welcome back, Gary!</h>
          <p>You have 0 new messages and 0 new notifications</p>
        </div>
      <div>
        <div className='body'>
          <img className='image' src='/images/Rectangle.png' alt='' /><br/>
          <span className='a'>No Projects available</span><br/>
          <span className='b'>There are no projects to show. Click the below button to add a new project</span><br/>
          <button className='create-project'>+ Create Project</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardFlow