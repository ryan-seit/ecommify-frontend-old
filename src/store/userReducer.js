const defaultState = {
  cart: []
}

const userReducer = (state = defaultState, action) => {
  console.log("userReducer action", action)
  switch (action.type) {
    case "SET_SEARCHTERM":
      return {...state, searchTerm: action.payload}
    default:
      return state
  }
}

export default userReducer;