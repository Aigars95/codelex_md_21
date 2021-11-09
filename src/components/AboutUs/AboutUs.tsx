import React from 'react';
import Title from '../Title/Title';
import './AboutUs.scss';
import Button from '../Button/Button';

const AboutUs = () => (
  <div className="about__container">
    <div className="about__content">
      <Title title="about" banner="us" />
      <p className="about__paragraphs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Velit, aliquam voluptas beatae vitae expedita consectetur
        nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!
      </p>
      <div>
        <Button className="button" buttonName="Explorer" />
      </div>
    </div>
    <div className="about__image-wrapper">
      <img className="about__image" src="https://js-beginners.github.io/filter-project/img/sweets-1.jpeg" alt="About us" />
    </div>
  </div>
);

export default AboutUs;
