import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">Price: {product.price}💲</p>
      <p className="product-quantity">Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductDetails;

