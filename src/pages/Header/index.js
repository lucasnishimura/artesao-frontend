import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/artesaosdeosasco_original.svg';

export default function Header(){
  return(
    <div id="header">
  <div className="container"> 
    <div className="logo">
      <img src={logoImg} height="70px" />
  	</div>
    
    <div className="menu">
    	<ul>
        	<li><a href="index.html" className="activebuscar">Buscar</a></li>
        	<li><a href="indicar.html" className="">Indicar Artesão</a></li>
        	<li><a href="sobre.html" className="">Sobre</a></li>
        	<li><a href="contato.html" className="">Contato</a></li>
        	<li><a href="duvidas.html" className="">Dúvidas</a></li>
    	</ul>
    </div>
  </div>
</div>
  );
}