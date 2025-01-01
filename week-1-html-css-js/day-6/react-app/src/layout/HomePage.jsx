import React from 'react'
import aiImage from '../assets/ai.png';
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <div style={styles.pageContainer}>
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

        <div style={styles.container}>
          <h2 style={styles.heading}>Welcome to AI Todo App</h2>
          <p style={styles.paragraph}>
            The AI Todo App is designed to help you organize and enhance your daily tasks in a smarter way with the help of artificial intelligence.
            Instead of just entering basic to-dos, the app generates meaningful and relevant task suggestions based on your input, making your to-do list more productive and tailored to your needs.
          </p>

          <h3 style={styles.subheading}>How It Works:</h3>
          <ol style={styles.list}>
            <li style={styles.listItem}>Type a task in the input box.</li>
            <li style={styles.listItem}>Click "Get AI Suggestion" to get a smart suggestion.</li>
            <li style={styles.listItem}>Stay organized with a meaningful to-do list.</li>
          </ol>


        </div>

        <div style={styles.container}>
          <NavLink to="/todo">

            <button class="chat-button">
              <span>Create Todo</span>
            </button>
          </NavLink>

        </div>
      </div>
    </div>
  )
}




const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',

  },
  navbar: {
    backgroundColor: 'rgb(124 171 128)',
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
