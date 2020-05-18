export const getProducts = () => {
  return fetch('http://localhost:3001/api/v1/products')
  .then(response => response.json())
  .then(products => {
    return {
      category: products.category,
      description: products.description,
      name: products.name,
      id: products.id,
      img_1: products.img_1,
      img_2: products.img_2,
      price: products.price
    }
  })
}