import { useState } from 'react';
import buttonsStoreData from '../../Data/buttonData/buttonsStoreData';
import storeItemsData from '../../Data/storeData/storeItemsData';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Store.scss';
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';

type StoreProps ={
    changeItemCountAndPrice: (count: number, totalPrice: number) => void;
}

const Store = ({ changeItemCountAndPrice }:StoreProps) => {
  const [storeItems, setStoreItems] = useState(storeItemsData);
  const [searchInput, setSearchInput] = useState('');
  const storeItemsFilter = (itemType: string) => {
    if (itemType === 'ALL') {
      setStoreItems(storeItemsData);
      return;
    }
    setStoreItems(storeItemsData.filter((item) => item.type === itemType));
  };

  const newItemCountAndPrice = (count: number, itemPrice:number) => {
    changeItemCountAndPrice(count, itemPrice);
  };

  return (
    <div className="store__container">
      <Title title="our" banner="store" />
      <div className="button-wrapper">
        {buttonsStoreData.map((button, index) => (
          <Button
            key={button.name}
            className="button"
            buttonName={button.name}
            clickHundler={() => storeItemsFilter(button.name.toUpperCase())}
          />
        ))}
      </div>

      <SearchBar input={searchInput} setSearchInput={setSearchInput} />

      <div className="card-wrapper">
        {storeItems.filter((item) => item.title.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1)
          .map((card, index) => (
            <Card
              key={`card${index + 1}`}
              title={card.title}
              price={card.price}
              imgSrc={card.imgSrc}
              type={card.type}
              clickHandler={newItemCountAndPrice}
            />
          ))}
      </div>
    </div>
  );
};

export default Store;
