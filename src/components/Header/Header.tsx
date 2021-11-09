import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Title from '../Title/Title';
import Button from '../Button/Button';

type HeaderProps = {
    itemCountAndPrice: {itemCount: number, totalPrice: number};
}

const Header = ({ itemCountAndPrice }:HeaderProps) => (
  <header className="header">
    <Navigation itemCountAndPrice={itemCountAndPrice} />
    <div className="header__container">
      <Title title="welcom to" banner="grandma's" />
      <Button className="button" buttonName="Explore" />
    </div>
  </header>

);

export default Header;

// https://js-beginners.github.io/filter-project/img/logo.svg
