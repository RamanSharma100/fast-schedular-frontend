import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import theme from './views/theme'

import 'react-toastify/dist/ReactToastify.css'

import store from './redux/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
