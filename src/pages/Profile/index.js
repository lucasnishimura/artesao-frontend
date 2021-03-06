import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import logoSvg from '../../assets/logo.svg'

export default function Profile(){
  return(
    <div className="profile-container">
      <header>
        <img src={logoSvg} alt="Be the hero"/>
        <span>Bem-vindo, APAD</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

        <button type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </header>
    </div>
  );
}