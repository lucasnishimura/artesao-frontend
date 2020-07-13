import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';
import banner_footer_indicar from './img/banner_footer_indicar.jpg';

export default function Header(){
  return(
    <div id="banner-footer">
      <a href="indicar.html"><img src={banner_footer_indicar} /></a>
      <p class="btn-banner"><a href="indicar.html">indicar</a></p>
	</div>
  );
}