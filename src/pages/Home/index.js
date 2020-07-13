import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import BannerFooter from '../BannerFooter'
import Carousel from '../Carousel'
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

// import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
  return(
      <div>
          <Header />
          <Carousel />
          <BannerFooter />
          <Footer />
      </div>
  );
}