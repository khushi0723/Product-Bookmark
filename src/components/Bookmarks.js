// src/components/Bookmarks.js
// src/Bookmarks.js
/*import React, { useEffect, useState } from 'react';

const Bookmarks = () => {
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedProducts(bookmarks);
  }, []);

  return (
    <div>
      <h2>Bookmarked Products</h2>
      <ul>
        {bookmarkedProducts.map((product, index) => (
          <li key={index}>
            <div>{product.title} - ${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmarks;*/
import React, { useEffect, useState } from 'react';

const Bookmarks = () => {
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);

  // Fetch bookmarks from localStorage when the component loads
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedProducts(bookmarks);
  }, []);

  // Function to remove a bookmarked product
  const removeBookmark = (indexToRemove) => {
    const updatedBookmarks = bookmarkedProducts.filter((_, index) => index !== indexToRemove);
    
    // Update localStorage with the new bookmarks array
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));

    // Update state to re-render the component
    setBookmarkedProducts(updatedBookmarks);
  };

  return (
    <div>
      <h2>Bookmarked Products</h2>
      <ul>
        {bookmarkedProducts.length > 0 ? (
          bookmarkedProducts.map((product, index) => (
            <li key={index}>
              <div>{product.title} - ${product.price}</div>
              <button onClick={() => removeBookmark(index)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No bookmarks found</p>
        )}
      </ul>
    </div>
  );
};

export default Bookmarks;