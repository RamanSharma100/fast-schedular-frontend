import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const notificationSlice = createSlice({
  name: 'popupNotification',
  initialState: {},
  reducers: {
    showPopupNotificationAction: (state, action) => {
      const {
        message,
        type = 'info',
        theme = 'light',
        position = 'top-right',
        autoClose = 3000,
        hideProgressBar = false,
      } = action?.payload
      toast(message, {
        type,
        theme,
        position,
        autoClose,
        hideProgressBar,
      })
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

const { actions, reducer } = notificationSlice
export const { showPopupNotificationAction } = actions
export default reducer
