import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
  return(
    <div id="header">
  <div class="container"> 
    <div class="logo">
      <img src="img/artesaosdeosasco_original.svg" height="70px" />
  	</div>
    
    <div class="menu">
    	<ul>
        	<li><a href="index.html" class="activebuscar">Buscar</a></li>
        	<li><a href="indicar.html" class="">Indicar Artesão</a></li>
        	<li><a href="sobre.html" class="">Sobre</a></li>
        	<li><a href="contato.html" class="">Contato</a></li>
        	<li><a href="duvidas.html" class="">Dúvidas</a></li>
    	</ul>
    </div>
  </div>
</div>
  );
}