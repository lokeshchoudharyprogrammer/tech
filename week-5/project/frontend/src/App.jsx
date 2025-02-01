import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import Signup from './Pages/Signup.tsx';
import SignIn from './Pages/SignIn.tsx';
import Blog from './Pages/Blog.tsx';
import Blogs from './Pages/Blogs.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blog/" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
