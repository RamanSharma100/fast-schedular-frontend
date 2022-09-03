import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './reducers/user'
import popUpnotificationReducer from './reducers/popUpNotifications'

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === 'user/loginSuccessAction') {
    localStorage.setItem(
      'fs-user',
      JSON.stringify({
        ...store.getState(),
        admin: {
          ...store.getState()?.admin,
          ...action.payload,
        },
      })
    )
  } else if (action.type === 'user/logoutAction') {
    localStorage.removeItem('fs-user')
  }
  return next(action)
}

const rehydrateState = () => {
  const serializedState = localStorage.getItem('fs-user')
  if (serializedState !== null) {
    return JSON.parse(serializedState)
  }
}

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    notifications: popUpnotificationReducer,
  },
  devTools: true,
  preloadedState: rehydrateState(),
  middleware: [localStorageMiddleware],
})
