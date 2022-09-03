import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged: false,
  authToken: '',
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      return {
        ...state,
        loading: true,
      }
    },
    loginSuccessAction: (state, action) => {
      const { payload } = action
      return {
        ...state,
        ...payload,
        loading: false,
      }
    },
    loginFailureAction: (state, action) => {
      const { payload } = action
      return {
        ...state,
        ...payload,
        loading: false,
      }
    },
    logoutAction: (state) => initialState,
  },
})

const { actions, reducer } = userSlice

export const { loginAction, logoutAction } = actions
export default reducer
