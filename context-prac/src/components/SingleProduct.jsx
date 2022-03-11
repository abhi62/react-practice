import React, { useContext } from 'react';
import { Cart } from '../Context';
import './styles.css';

const SingleProduct = ({ products: item }) => {
  console.log(`%c${item}`, `color: red; font-size: 20px;`);
  const { cart, setCart } = useContext(Cart);
  return (
    <div>
      {
        <div className='products'>
          <img src={item.image} alt={item.title} />
          <div className='productDesc'>
            <span style={{ fontWeight: '700' }}>{item.title}</span>
            <span>₹{item.price.substring(0, 3)}</span>
          </div>
          {cart.includes(item) ? (
            <button
              className='remove'
              onClick={() => setCart(cart.filter((c) => c.id !== item.id))}
            >
              Remove
            </button>
          ) : (
            <button className='add' onClick={() => setCart([...cart, item])}>
              Add to cart
            </button>
          )}
        </div>
      }
    </div>
  );
};

export default SingleProduct;
