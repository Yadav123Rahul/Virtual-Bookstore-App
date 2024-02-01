import React from "react";
function AllBooks({ allBooks, setActiveBooks }) {
  return (
    <div className="all-books">
      <h3>More Info</h3>
      <div className="books-container" style={{display:'grid', gridTemplateColumns:"repeat(4, 1fr)"}}>
        {allBooks.length > 0 &&
          allBooks.map((book) => {
            return (
              <div key={book.id} onClick={() => setActiveBooks(book)}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllBooks;
