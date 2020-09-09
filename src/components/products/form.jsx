import React from "react";

export default function form() {
  return (
    <form>
      <label for="name">Name</label>
      <input name="name" placeholder="Name" className="product_input" />
      <label for="price">Price</label>
      <input name="price" placeholder="Price" className="product_input" />
      <label for="image_url">Image Url</label>
      <input
        name="image_url"
        placeholder="Image URL"
        className="product_input"
      />
      <label for="category">Category</label>
      <select name="category">
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="furniture">Furniture</option>
      </select>
      <label for="short_description">Short Description</label>
      <textarea
        name="short_description"
        placeholder="Short Description"
        className="product_input"
      />
      <button htmlType="submit">Add Product</button>
    </form>
  );
}
