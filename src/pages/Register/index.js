import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Register(){
  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logoHero"/>
          <h1>Cadastro</h1>
          <p>Faça o seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="black-link" to="/">
            <FiArrowLeft size="16" color="#E02041"/>
            Já tenho cadastro
          </Link>
        </section>
        <form>
          <input type="text" placeholder="Nome da ONG" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="WhatsApp" />
          
          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}