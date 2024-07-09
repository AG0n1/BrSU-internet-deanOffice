import React from 'react';
import './css/StudentDashboard.css';
import Timetable from './dashboard/timetable/Timetable';
import logo from "./img/logo.png"
import photo from "./img/photo.jpg"

const StudentDashboard = () => {
  const styles={
    background: `url(${photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
  let timetable = true,
      estimates = false
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

       {timetable && <Timetable />}


      </div>
    </div>
  );
};

export default StudentDashboard;
