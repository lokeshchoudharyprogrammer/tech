import logo from './logo.svg';
import './App.css';
import { Todo } from './Pages/Todo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './layout/HomePage';

function App() {

  return (
    <Routes>
      <Route path="/todo" element={<Todo />} />
      <Route path="/" element={<HomePage />} />
    </Routes>

  );
}

export default App;
