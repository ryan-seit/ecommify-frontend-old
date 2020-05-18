// action creators
// function that returns an action { type: "", payload: data }

export const getProducts = () => {
  return fetch('http://localhost:3001/api/v1/products')
  .then(response => response.json())
  .then(products => {
    return {
      products: state.products
    }
  })
}