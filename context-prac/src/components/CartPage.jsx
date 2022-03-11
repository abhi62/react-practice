import React, { useContext, useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { Cart } from '../Context';

const CartPage = () => {
  const [total, setTotal] = useState();
  const { cart, setCart } = useContext(Cart);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, val) => {
        return acc + Number(val.price);
      }, 0)
    );
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: '30px' }}>My cart</span>
      <br />
      <span style={{ fontSize: '30px' }}>Total: {total}</span>
      <div className='productContainer'>
        {cart.map((prod) => (
          <SingleProduct
            products={prod}
            cart={cart}
            setCart={setCart}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
