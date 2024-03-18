import React, { useState } from "react";
import { PRODUCTS } from "../../components/Products";
import Product from "./Product";
import './shop.css';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('Top Picks');

  const categories = ['Top Picks', 'men\'s clothing', 'women\'s clothing', 'jewelery', 'electronics'];

  const filteredProducts = selectedCategory === 'Top Picks'
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="shop">
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
