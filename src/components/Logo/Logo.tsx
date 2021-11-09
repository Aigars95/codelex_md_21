import './Logo.scss';
import { FC } from 'react';

type LogoProps ={
  srcLogo: string;
}

const Logo:FC<LogoProps> = ({ srcLogo }) => (

  <img className="logo" src={srcLogo} alt="pic" />

);

export default Logo;
