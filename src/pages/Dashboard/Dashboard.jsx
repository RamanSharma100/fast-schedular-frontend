import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/DashboardComponents/Navbar/Navbar'

// import { Navbar } from '../../components'

const Availability = React.lazy(() => import('../Availability/Availability'))
const DashHome = React.lazy(() => import('./DashHome/DashHome'))
const CreateEvent = React.lazy(() => import('../CreateEvent/CreateEvent'))

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<DashHome />} />
          <Route path="availability" element={<Availability />} />
          <Route path="event/create" element={<CreateEvent />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Dashboard
