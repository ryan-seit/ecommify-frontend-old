import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
// import LoadingSpinner from './LoadingSpinner';

const ProductContainer = () => {

  const { searchTerm, startIndex, products } = useSelector(state => {
    return {
      searchTerm: state.searchTerm,
      startIndex: state.startIndex,
      products: state.products
    }
  })

  // componentDidMount() {
  //   this.fetchProducts()
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params.city !== prevProps.match.params.city) {
  //     this.setState({ loaded: false })
  //     this.fetchListings()
  //   }
  // }



  renderProducts= () => {
    let products = this.state.products
    // console.log(this.state)
    return products.map(product => <ProductCard key={product.id} {...product} />)
  }

  return (
    <div className="ProductContainer">
      {this.renderProducts()}
    </div>
  )
};

export default ProductContainer;