import React from 'react';
import './css/StudentDashboard.css';
import logo from "./img/logo.png"

import photo from "./img/photo.jpg"

const StudentDashboard = () => {
  const styles={
    background: `url(${photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
  return (
    <div className="student-dashboard">

      <div className="sidebar">
        <img width="100%" src={logo} />
        <nav>
          <a href="/schedule">Расписание</a>
          <a href="/grades">Оценки</a>
        </nav>
      </div>

      <div className="main-content">
        <div className="profile">
          <div className="profile-info">
            <div style={styles} className="img">

            </div>

            <div className="profile-text">
              <h1>Евгений Савчук</h1>
              <h3>Студент физико-математического факультета
              3 курс</h3>
            </div>
          </div>
        </div>

        <h1>Расписание</h1>


          <div className="days">
            <div className="day" id="monday">
                <h3>
                  Понедельник
                </h3>
                <div>
                  
                </div>
            </div>

            <div className="day" id="tuesday">
                <h3>
                  Вторник
                </h3>
                <div>
                  
                </div>
            </div>

            <div className="day" id="wednesday">
                <h3>
                  Среда
                </h3>
                <div>
                  
                </div>
            </div>

            <div className="day" id="thursday">
                <h3>
                  Четверг
                </h3>
                <div>
                  
                </div>
            </div>

            <div className="day" id="friday">
                <h3>
                  Пятница
                </h3>
                <div>
                  
                </div>
            </div>

            <div className="day" id="saturday">
                <h3>
                  Суббота
                </h3>
                <div>
                  
                </div>
            </div>
          </div>


      </div>
    </div>
  );
};

export default StudentDashboard;
