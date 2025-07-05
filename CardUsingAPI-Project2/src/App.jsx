import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Card from './Card.jsx'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fake-store-api.mock.beeceptor.com/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-4">
          {products.map((product) => (
            <Card
              key={product.product_id}
              title={product.name}
              price={product.price}
              imageUrl={product.image}
              description={product.description}
              expiryDate={product.expiryDate}
            />
          ))}
        </div>
      }
    </>
  )
}

export default App
