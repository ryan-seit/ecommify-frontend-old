const defaultState = {
  counter: 0,
  searchTerm: "hey buddy",
  startIndex: 0,
  products: [],
  loaded: true,
  product: null
}

const productReducer = (state = defaultState, action) => {
  console.log("productReducer action", action)
  switch (action.type) {
    case "SET_SEARCHTERM":
      return {...state, searchTerm: action.payload}
    default:
      return state
  }
}

export default productReducer;