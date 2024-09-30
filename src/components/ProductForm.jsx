import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductForm = ({ addProduct, editProduct }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isEditing = location.state && location.state.product;

  const [name, setName] = useState(isEditing ? location.state.product.name : "");
  const [price, setPrice] = useState(isEditing ? location.state.product.price : "");
  const [quantity, setQuantity] = useState(isEditing ? location.state.product.quantity : "");
  const [imageUrl, setImageUrl] = useState(isEditing ? location.state.product.imageUrl : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, quantity, imageUrl };
    if (isEditing) {
      editProduct(location.state.index, product); 
    } else {
      addProduct(product);
    }
    navigate("/products");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{isEditing ? "Edit Product" : "Add Product"}</h2>
      <input
        type="text"
        className="form-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        className="form-input"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        required
      />
      <input
        type="number"
        className="form-input"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Product Quantity"
        required
      />
      <input
        type="url"
        className="form-input"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        required
      />
      <button type="submit" className="submit-button">{isEditing ? "Update" : "Add"}</button>
    </form>
  );
};

export default ProductForm;
