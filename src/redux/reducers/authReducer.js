const initialState = {
  logged: false,
  user: null,
  authToken: '',
  loading: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        logged: true,
        user: action.payload.user,
        authToken: action.payload.authToken,
        loading: false,
      }
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        user: null,
        authToken: '',
        loading: false,
      }
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
