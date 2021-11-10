import './Navigation.scss';
import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import buttonNavData from '../../Data/buttonData/buttonNavData';

type NavigationProps ={
    itemCountAndPrice: {itemCount: number, totalPrice: number};
}
const Navigation = ({ itemCountAndPrice }:NavigationProps) => (

  <nav className="navbar">
    <Logo srcLogo="https://js-beginners.github.io/filter-project/img/logo.svg" />
    <div>
      {buttonNavData.map((button) => (
        <Button
          className="button button__nav"
          key={button.name}
          buttonName={button.name}
        />
      ))}

    </div>
    <div className="navbar__info">
      <span>+123 456 789</span>
      <div>{`${itemCountAndPrice.itemCount} items-$${itemCountAndPrice.totalPrice}`}</div>
    </div>
  </nav>

);

export default Navigation;
