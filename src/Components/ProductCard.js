import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

  const { category, description, name, id, img_1, img_2, price } = props
  
  return (
    <div className="ProductCard" id={id}>
      <Link to={`/products/${id}`}>
        <img className="Image" src={img_1} alt={name} />
        <h4 className="Name">{name.toUpperCase()}</h4>
        <div className="Price">${price}</div>
        {/* <div className="Description">{description}</div> */}
        <div className="Category">{category}</div>
      </Link>
    </div>
  )
}

export default ProductCard;