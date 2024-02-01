import React, { useState,useEffect } from "react";
import Navbar from "./Components/Navbar";
import AllBooks from "./Components/AllBooks";
import ActiveBooks from "./Components/ActiveBooks";

function App() {
  
    const[allBooks, setAllBooks]=useState([]);
    const[activeBooks, setActiveBooks]=useState(null);
     
    useEffect(()=>{
      const getAllBooks = async () => {
        let books=[];
          const res=await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
          const data=await res.json();
        //   console.log(data.items);
        // Books=[...data.items];
        books=data.items;

        const res2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        const data2 = await res2.json();
        // console.log(data2.items);
        books=[...books, ...data2.items];
        setAllBooks(books);

      };
      getAllBooks();

    },[]);


  return <div>
    <Navbar />
    <ActiveBooks ActiveBooks={activeBooks} />
    <AllBooks allBooks={allBooks} setActiveBooks={setActiveBooks} />
  </div>;
}

export default App;
