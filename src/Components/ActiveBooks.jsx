import React from "react";

function ActiveBooks({ activeBooks }) {
  return (
    <div className="active-book">
      {activeBooks && (
        <div className="book-card">
          <div className="book-image">
            <img src="activebooks.volumeInfo.imageLinks.thumbnail" alt="" />
          </div>
          <div className="book-info">
            <h3>{activeBooks.volumeInfo.title}</h3>
            <p>{activeBooks.volumeInfo.authors.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActiveBooks;
