import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage';
import StudentDashboard from './components/StudentDashBoard';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<StartPage />} />
      <Route path="/test" element={<StudentDashboard />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
