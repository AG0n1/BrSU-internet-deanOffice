import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage';
import StudentDashboard from './components/StudentDashBoard';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/register" element={<StudentDashboard />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
