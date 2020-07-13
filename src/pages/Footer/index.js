import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';
import logoImgNegativo from '../../assets/artesaosdeosasco_negativo.svg';

export default function Header(){
  return(
    <div id="footer" class="footer-home">
    <div class="footer-container">
      <ul class="menu-footer">
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="indicar.html">Indicar artesão</a></li>
        <li><a href="contato.html">Contato</a></li>
        <li><a href="contato.html">Relatar um problema</a></li>
        <li><a href="duvidas.html">Dúvidas</a></li>
      </ul>
      <p class="copyright">© 2020. Todos os direitos reservados.</p>
      
      <img class="logo-footer" src={logoImgNegativo} width="163px"/>		
    </div>	
  </div>
  );
}