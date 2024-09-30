import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products, setProducts, editProduct }) => {
    console.log(products);
  const deleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <div className="products">

      {/* <h2 className="products-title">Products</h2> */}
      <div className='add-product'><Link to="/add-product" className="add-product-link">➕ Add Product</Link></div>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: {product.price}💲</p>
            <p className="product-quantity">Quantity: {product.quantity}</p>
            <button className="delete-button" onClick={() => deleteProduct(index)}>❌</button>
            <Link to={`/product/${index}`} className="details-link">👁️</Link>
            <Link to={`/edit-product`} state={{ product, index }} className="edit-link">✍️</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
