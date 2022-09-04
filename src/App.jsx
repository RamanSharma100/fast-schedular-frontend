import React, { Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { loginSuccessAction, logoutAction } from './store/reducers/user'

// pages
const Home = React.lazy(() => import('./pages/Home/Home'))

const Login = React.lazy(() => import('./pages/Login/Login'))

const Register = React.lazy(() => import('./pages/Register/Register'))

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'))

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('fs-user'))

    // check if token not present
    if (!user) {
      return
    }

    // check Token expiry

    const expiry = new Date(user.expiry)
    const now = new Date()

    if (now > expiry) {
      localStorage.removeItem('fs-user')
      dispatch(logoutAction())
      return
    }

    if (user && user.authToken) {
      dispatch(
        loginSuccessAction({
          logged: true,
          user: user.user,
          authToken: user.authToken,
        })
      )
      navigate('/dashboard')
    }

    if (user) {
      dispatch(
        loginSuccessAction({
          logged: true,
          user: user.user,
          authToken: user.token,
        })
      )
      navigate('/dashboard')
    }
  }, [])

  return (
    <div className="App">
      <ToastContainer />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
