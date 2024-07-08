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
                <h5>
                  Понедельник
                </h5>
            </div>

            <div className="day" id="tuesday">

            </div>

            <div className="day" id="wednesday">

            </div>

            <div className="day" id="thursday">

            </div>

            <div className="day" id="friday">

            </div>ы

            <div className="day" id="saturday">

            </div>
          </div>


      </div>
    </div>
  );
};

export default StudentDashboard;
