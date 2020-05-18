import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const ProductPage = () => {

  const { category, description, name, id, img_1, img_2, price, cart } = useSelector(state => {
    return {
      category: state.product.category,
      description: state.product.description,
      name: state.product.name,
      id: state.product.id,
      img_1: state.product.img_1,
      img_2: state.product.img_2,
      price: state.product.price,
      cart: state.cart
    }
  })

  // componentWillMount() {
  //   console.log("ProductPage fetch", this.props.match.params.id)
  //   fetch(`http://localhost:3001/api/v1/products/${this.props.match.params.id}`)
  //     .then(response => response.json())
  //     .then(product => {
  //       console.log(product)
  //       this.setState({
  //         product: product,
  //         loaded: true
  //       })
  //     })
  // }

  // componentDidMount() {
  //   // console.log("ProductPage fetch", this.props.match.params.id)
  //   axios.get(`http://localhost:3001/api/v1/products/${this.props.match.params.id}`)
  //     .then(result => {
  //       console.log(result.data)
  //       let product = result.data
  //       this.setState({
  //         product: product,
  //         loaded: true
  //       })
  //     })
  // }

  return (
    <div className="ProductPage">
      <div className="Product Category">{category}</div>
      <div className="ProductImg">
        <img className="Image" src={img_1} alt={name} />
      </div>
      <div className="ProductInfo">
        <h2>{name}</h2>
        <h3>{price}</h3>
        <button>Add to Cart</button>
        <p>{description}</p>
      </div>
    </div>
  )
};

// mapStateToProps = returns whatever props we want added to our component
const mapStateToProps = state => {
  console.log("mSP", state)
  return {
    product: state.product,
    loaded: state.loaded
  }
}

//  HOC - Higher Order Component
// provide access to the 'dispatch' function
export default ProductPage;