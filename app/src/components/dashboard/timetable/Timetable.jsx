import Lesson from "./Lesson"

function Timetable() {

  // fetch("http://localhost:3001/getLessonsData", {
  //   method: "POST",
  //   headers: {
      
  //   },
  //   body: JSON.stringify({user: null})
  // })

    return (
        <>
        <h1>Расписание</h1>


<div className="days">
  <div className="day" id="monday">
      <h3>
        Понедельник
      </h3>
      <div>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
  </div>

  <div className="day" id="tuesday">
      <h3>
        Вторник
      </h3>
      <div>
          <Lesson />
          <Lesson />
          <Lesson />
          <Lesson />
      </div>
  </div>

  <div className="day" id="wednesday">
      <h3>
        Среда
      </h3>
      <div>
      <Lesson />
          <Lesson />
          <Lesson />
          <Lesson />
      </div>
  </div>

  <div className="day" id="thursday">
      <h3>
        Четверг
      </h3>
      <div>
      <Lesson />
          <Lesson />
          <Lesson />
          <Lesson />
      </div>
  </div>

  <div className="day" id="friday">
      <h3>
        Пятница
      </h3>
      <div>
      <Lesson />
          <Lesson />
          <Lesson />
          <Lesson />
      </div>
  </div>

  <div className="day" id="saturday">
      <h3>
        Суббота
      </h3>
      <div>
      <Lesson />  
          <Lesson />
          <Lesson />
          <Lesson />
      </div>
  </div>
</div>
        </>
    )
}

export default Timetable