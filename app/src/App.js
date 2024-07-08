import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StartPage from './components/LogIn';
import Footer from './components/Footer';

import Task3 from './components/tasks/Task3';
import Task2 from './components/tasks/Task2';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="task2" element={<Task2 />} />
        <Route path="task3" element={<Task3 />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
