export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: 'LOGIN', payload: userData })
}

export const logoutUser = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' })
}
