import { useState, useEffect, useRef } from 'react';
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
const colorTitleArr = ['black', 'green', 'blue', 'yellow', 'red'];

const Store = ({ changeItemCountAndPrice }:StoreProps) => {
  const [titleColor, setTitleColor] = useState('black');
  const firstUpdate = useRef(true);
  const [pageLifeTime, setPageLifeTime] = useState(0);
  const [storeItems, setStoreItems] = useState(storeItemsData);
  const [searchInput, setSearchInput] = useState('');

  const getRandomNum = (max: number) => Math.floor(Math.random() * max);
  let oldColor: string;
  const setNewTitleColor = () => {
    while (true) {
      const newRandNum = getRandomNum(5);
      const newColor = colorTitleArr[newRandNum];
      if (oldColor !== newColor) {
        setTitleColor(newColor);
        oldColor = newColor;
        break;
      }
    }
  };

  const storeItemsFilter = (itemType: string) => {
    if (itemType === 'ALL') {
      setStoreItems([...storeItemsData]);
      return;
    }
    setStoreItems(storeItemsData.filter((item) => item.type === itemType));
  };

  const newItemCountAndPrice = (count: number, itemPrice:number) => {
    changeItemCountAndPrice(count, itemPrice);
  };

  useEffect(() => {
    alert('Komponente ir ielādējusies!');
  }, []);

  useEffect(() => {
    let secondCount = 0;
    const intervalID = setInterval(() => {
      setPageLifeTime(secondCount);
      secondCount += 1;
      if (secondCount > 10 && secondCount % 2 === 0) {
        setNewTitleColor();
      }
    }, 1000);
    return () => { clearInterval(intervalID); };
  }, [storeItems]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setNewTitleColor();
  }, [storeItems]);

  return (
    <div className="store__container">
      <Title title="our" banner="store" />
      <h1 style={{ color: `${titleColor}`, fontSize: '30px' }}>Priecīgus ziemassvētkus!</h1>
      <h5>{pageLifeTime}</h5>
      <div className="button-wrapper">
        {buttonsStoreData.map((button) => (
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
