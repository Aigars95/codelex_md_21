import { FC } from 'react';
import './Title.scss';

type titleProps ={
    title: string;
    banner: string;
}

const Title:FC<titleProps> = ({ title, banner }) => (
  <h1 className="title">
    {title}
    <span className="title__banner">
      {banner}
    </span>
  </h1>
);

export default Title;
