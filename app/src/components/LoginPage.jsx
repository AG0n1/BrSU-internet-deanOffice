import React from 'react';
import './css/LoginPage.css';
import logo from "./img/logo.png"

const LoginPage = () => {
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
          <button>Войти</button>
          <a href="/">Нет аккаунта? Пройдите регистрацию</a>
          <a href="/forgot-password">Забыли пароль?</a>
        </form>
      </div>
    </>
    
  );
};

export default LoginPage;
