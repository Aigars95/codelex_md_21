import './Card.scss';
import { FC } from 'react';

type cardProps ={
    title: string;
    price: number;
    imgSrc: string;
    type: string;
    clickHandler: (itemCount: number, itemPrice: number) => void;
}

const Card: FC<cardProps> = ({
  title, price, imgSrc, type, clickHandler,
}) => {
  let count = 0;
  let totalPrice = 0;
  const handlerItemCoudAndPriceChange = () => {
    count += 1;
    totalPrice += price;
    clickHandler(count, totalPrice);
  };
  return (

    <div className="card">
      <div className="card__image">
        <img className="image__item" src={imgSrc} alt="" />
        <div className="add__btn" onClick={handlerItemCoudAndPriceChange}>add</div>
      </div>
      <div className="card__body">
        <div className="card__content">
          <h2 className="heading2">
            {title}
          </h2>
          <h2 className="heading2">
            $
            {price}
          </h2>
        </div>
      </div>
    </div>

  );
};

export default Card;
