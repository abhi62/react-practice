import React, { useContext } from 'react';
import { Cart } from '../Context';

import SingleProduct from './SingleProduct';
import './styles.css';

const Home = () => {
  const { products } = useContext(Cart);
  console.log(`%c${products}`, `color: blue; font-size: 20px;`);
  console.log(products);
  console.log(`%c${products}`, `color: blue; font-size: 20px;`);
  return (
    <div className='productContainer'>
      {products.map((item) => (
        <SingleProduct key={item.id} products={item} />
      ))}
    </div>
  );
};

export default Home;
