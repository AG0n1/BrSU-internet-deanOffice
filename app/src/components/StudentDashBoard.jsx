import React from 'react';
import './css/StudentDashboard.css';
import Timetable from './dashboard/timetable/Timetable';
import Estimates from './dashboard/estimates/Estimates';
import logo from "./img/logo.png"
import photo from "./img/photo.jpg"
import { useState } from 'react';

const StudentDashboard = () => {
  
  const [show, setShow] = useState("Расписание");

  const styles = {
    background: `url(${photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div className="student-dashboard">

      <div className="sidebar">
        <img width="100%" src={logo} alt="Logo" />
        <nav>
          <button onClick={() => setShow("Расписание")}>Расписание</button>
          <button onClick={() => setShow("Оценки")}>Оценки</button>
        </nav>
      </div>

      <div className="main-content">
        <div className="profile">
          <div className="profile-info">
            <div style={styles} className="img"></div>

            <div className="profile-text">
              <h1>Евгений Савчук</h1>
              <h3>Студент физико-математического факультета
              3 курс</h3>
            </div>
          </div>
        </div>
        {show === "Расписание" && <Timetable />}
        {show === "Оценки" && <Estimates />}
      </div>
    </div>
  );
};

export default StudentDashboard;
