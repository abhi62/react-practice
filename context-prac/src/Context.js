import React, { createContext, useState } from 'react';
import faker from 'faker';
export const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const fakeData = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
    };
  });
  const [products] = useState(fakeData);

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;
