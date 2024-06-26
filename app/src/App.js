import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StartPage from './components/LogIn';

import Task2 from './components/tasks/Task2';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="task2" element={<Task2 />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
        
    //   </header>

    //   <StartPage />
    // </div>
  );
}

export default App;
