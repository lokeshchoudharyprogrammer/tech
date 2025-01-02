import React from 'react';
// import './Todo.css'; // Assuming custom styles or frameworks like TailwindCSS are applied
import aiImage from '../assets/ai.png';


export const Todo = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    if (!newTodo.trim()) {
      alert('Please enter a task');
      return;
    }

    const todo = { id: todoList.length + 1, title: newTodo.replace(/[1-4.]/g, ""), isCompleted: false };
    setTodoList([...todoList, todo]);
    setNewTodo('');
  };

  const handleMarkAsCompleted = (id) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoList(updatedList);
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleAIContent = () => {
    // alert(newTodo)
    fetch(`https://day-7-server.onrender.com/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: newTodo })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.aiContent.split("\n"));
        setNewTodo(data.aiContent);
      })
      .catch(error => {
        console.error("Error fetching AI content:", error);
      });
  };

  return (
    <>
      <div style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img
            src={aiImage}
            alt="AI Logo"
            style={styles.logo}
          />
        </div>

        <div style={styles.appTitleContainer}>
          <p style={styles.appTitle}>AI Todo App</p>
        </div>
      </div>
      <p style={{
        textAlign: "center",
        border: "1px solid black",
        color: "white",
        backgroundColor: "black",
        width: "fit-content",
        display: "flex",
        margin: "auto",
        marginTop: "20px",
        padding: "15px",
        borderRadius: "50px",
        opacity: "0.8"
      }}>API Request slow please wait for 20Sec</p>
      <div className='container'>
        <div className="todo-input-section">

          <input
            type="text"
            placeholder="Enter your task"
            value={newTodo.replace(/[1-4.]/g, "")}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
          />
          {newTodo.length > 0 && <button onClick={handleAIContent} type="button" class="btn">
            <strong>AI</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle">=</div>
            </div>
          </button>}
          <button onClick={handleAddTodo} className="todo-add-btn">
            Add Task
          </button>
        </div>

        {newTodo.split("\n").length > 1 && <div>
          <h2 style={styles.heading}>Click on Suggestions and get Use :</h2>
          <div className="aiSuggestions">
            {newTodo.split("\n").map((todo, index) => (
              <p onClick={() => setNewTodo(todo)} className="aiSuggestionsText" key={index} style={styles.listItem}>{todo.replace(/[1-4.]/g, "")}</p>
            ))}
          </div>

        </div>}




        <div className="todo-container">


          <div className="todo-list">
            {todoList.map((todo) => (
              <div key={todo.id} className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleMarkAsCompleted(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.title}</span>
                <button onClick={() => handleDeleteTodo(todo.id)} className="todo-delete-btn">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',

    color: '#333',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    backgroundColor: 'rgb(79 154 112)',
    color: 'white',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: '0',
    zIndex: '10',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '120px',
    height: '80px',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  appTitleContainer: {
    textAlign: 'center',
  },
  appTitle: {
    fontSize: '26px',
    fontWeight: '700',
    color: '#fff',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#f0c67d',
  },
  container: {
    padding: '40px 20px',
    maxWidth: '1100px',
    margin: 'auto',
    flex: '1',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  list: {
    marginLeft: '20px',
    fontSize: '18px',
    lineHeight: '1.7',
    marginBottom: '30px',
  },
  listItem: {
    marginBottom: '10px',
  },
  footer: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '15px',
    textAlign: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: '14px',
  },
};
