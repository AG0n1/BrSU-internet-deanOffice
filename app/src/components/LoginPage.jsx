import React from 'react';
import './css/LoginPage.css';
import logo from "./img/logo.png"

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()

  const func = () => {
    navigate("/studentDashboard")
  }

  return (
    <>
      <header>
        <a target='_blank' href="https://www.brsu.by/">
            <img width="250px" src={logo} />
        </a>
      </header>
      <div className="login-page">
        <form className="login-form">
          <h1>Войти</h1>
          <input type="text" placeholder="Введите email или логин" />
          <input type="password" placeholder="Введите пароль" />
          <button onClick={func}>Войти</button>
          <a href="/">Нет аккаунта? Пройдите регистрацию</a>
          <a href="/forgot-password">Забыли пароль?</a>
        </form>
      </div>
    </>
    
  );
};

export default LoginPage;
