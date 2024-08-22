
// src/components/Products.js
// src/Products.js
// src/Products.js
import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}&select=title,price`);
    const data = await res.json();
    setProducts(data.products);
  };

  const bookmarkProduct = (product) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const updatedBookmarks = [...bookmarks, product];
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    alert('Product bookmarked!');
  };

  const handleNextPage = () => setPage(page + 1);
  const handlePreviousPage = () => setPage(page > 0 ? page - 1 : 0);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>{product.title} - ${product.price}</div>
            <button onClick={() => bookmarkProduct(product)}>Bookmark</button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 0}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Products;