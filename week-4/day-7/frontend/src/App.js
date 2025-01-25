import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { CreatePost } from './Pages/CreatePost';
function App() {

  let [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  },2000)
  
  if (loading) {
    return (
      <div className="App">
        <section className="loader">
          <div className="slider" style={{ '--i': 0 }}></div>
          <div className="slider" style={{ '--i': 1 }}></div>
          <div className="slider" style={{ '--i': 2 }}></div>
          <div className="slider" style={{ '--i': 3 }}></div>
          <div className="slider" style={{ '--i': 4 }}></div>
        </section>
      </div>
    );
  }

  return (
    <div className="App">
    
    <CreatePost/>
    </div>
  );
}

export default App;
