import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// pages
const Home = React.lazy(() => import('./pages/Home/Home'))

const Login = React.lazy(() => import('./pages/Login/Login'))

const Register = React.lazy(() => import('./pages/Register/Register'))

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'))

const App = () => {
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
