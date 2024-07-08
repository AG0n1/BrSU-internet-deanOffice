// src/components/StudentDashboard.js

import React from 'react';
import './css/StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">

      <div className="sidebar">
        <h2>Брестский Государственный Университет</h2>
        <nav>
          <a href="/schedule">Расписание</a>
          <a href="/grades">Оценки</a>
        </nav>
      </div>

      <div className="main-content">
        <div className="profile">
          <img src="profile-pic-url" alt="Евгений Савчук" />
          <h3>Евгений Савчук</h3>
          <p>Студент физико-математического факультета</p>
        </div>
        <div className="schedule">
          <h2>Расписание</h2>
          <div className="day">
            <h3>Понедельник</h3>
            <div className="class">
              <time>8:30</time>
              <p>Теория функции комплексной переменной</p>
              <p>Грищук Е.В.</p>
              <p>614</p>
            </div>
            <div className="class">
              <time>10:05</time>
              <p>Основы программирования</p>
              <p>Мацкевич Е.А.</p>
              <p>620</p>
            </div>
            <div className="class">
              <time>11:55</time>
              <p>Средства управления базами данных (Практика)</p>
              <p>Кондратюк А.П.</p>
              <p>616</p>
            </div>
            <div className="class">
              <time>13:30</time>
              <p>Нет пары</p>
            </div>
          </div>
          {/* Repeat similar structure for other days */}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
