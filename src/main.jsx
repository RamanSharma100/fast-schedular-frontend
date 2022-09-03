import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import theme from './views/theme'

import 'react-toastify/dist/ReactToastify.css'

import { store } from './store/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
