import React, { useState } from 'react';
import Header from './components/Header/Header';
import Store from './components/Store/Store';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => {
  const [itemCountAndPrice, setItemCountAndPrice] = useState({ itemCount: 0, totalPrice: 0 });
  const handlerItemCountAndPriseChange = (count:number, itemPrice:number) => {
    const itemCount = itemCountAndPrice.itemCount + count;
    const totalPrice = itemCountAndPrice.totalPrice + itemPrice;
    setItemCountAndPrice({ itemCount, totalPrice });
  };
  return (
    <>
      <Header itemCountAndPrice={itemCountAndPrice} />
      <AboutUs />
      <Store changeItemCountAndPrice={handlerItemCountAndPriseChange} />

    </>
  );
};

export default App;
