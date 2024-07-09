import React from 'react';
import './css/StudentDashboard.css';
import Timetable from './dashboard/timetable/Timetable';
import Estimates from './dashboard/estimates/Estimates';
import logo from "./img/logo.png"
import photo from "./img/photo.jpg"

const StudentDashboard = () => {
  
  const changeComponent = (e) => {
    console.log(e.target.textContent)
    switch (e.target.textContent) {

    }
  }

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
          <button onClick={changeComponent}>Расписание</button>
          <button onClick={changeComponent}>Оценки</button>
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
       {estimates && <Estimates />}

      </div>
    </div>
  );
};

export default StudentDashboard;
