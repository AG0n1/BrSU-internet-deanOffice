import React from 'react';
import './css/StartPage.css'
import logo from "./img/logo.png"

const StartPage = () => {
  return (
        <>
            <header>
                <img width="250px" src={logo} />
            </header>
            <div className="registration-page">
                <form className="registration-form">
                    <h1>Зарегистрироваться</h1>
                    <input type="email" placeholder="Введите email" />
                    <input type="password" placeholder="Введите пароль" />
                    <input type="password" placeholder="Повторите пароль" />
                    <button>Зарегистрироваться</button>
                    <a href="/login">Уже есть аккаунт? Войдите</a>
                </form>
            </div>
        </>
  );
};

export default StartPage;