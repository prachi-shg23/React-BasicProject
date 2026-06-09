import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Componets/Card'

function App() {
  const [books, setBooks] = useState([]);
  
useEffect(() => {
 // fetch("http://localhost:14843/api/books") 
 fetch(`${import.meta.env.VITE_API_URL}/books`)
    .then((response) => response.json())
    .then((data) => setBooks(data));
}, []);

  return (
    <>
    <div className="flex flex-wrap">
  {books.map((book) => (
    <Card key={book.id} name={book.name} price={book.price} published={book.published}  description={book.description} 
    />
  ))}
</div>

    </>
  )
}

export default App
