import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BlogCard({time,value,author, title, content }) {
 
  
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    function calculateReadTime(text) {
      const words = text.trim().split(/\s+/).length;
      const wordsPerMinute = 200;
      return Math.ceil(words / wordsPerMinute);
    }
    setReadTime(calculateReadTime(content));
  }, [content]);
  console.log()

  return (
    
    <Link to={`/blog/${value}`} style={{
      color:"black",
      textDecoration:"none"
    }}>
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.avatar}>{author.charAt(0)}</div>
        {/* @ts-ignore   */}
        <div style={styles.meta}>
          <span style={styles.author}>{author}</span>
          <span style={styles.date}>
            {new Date(time).toLocaleDateString('en-GB')?new Date(time).toLocaleDateString('en-GB'):new Date().toISOString().split("T")[0]}
          </span>
        </div>
      </div>
  
      {/* Card Content */}
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>
          {content.slice(0, 150)}
          {content.length > 150 && "..."}
        </p>
      </div>
   {/* @ts-ignore   */}
      <div style={styles.footer}>
        <span style={styles.readTime}>{readTime} min read</span>
      </div>
    </div>
  </Link>
  
  );
}

const styles = {
  card: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.6,
    underline: 'none',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',underline: 'none',
  },
  avatar: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: '#4a4949',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:"12px",underline: 'none',

  },
  author: {
    fontWeight: '600',
    color: '#4a4949',
  },
  date: {
    fontSize: '12px',
    color: '#888',
  },
  content: {
    marginBottom: '15px',
  },
  title: {
    margin: '0 0 10px 0',
    color: '#333',
  },
  description: {
    margin: 0,
    color: '#555',
  },
  footer: {
    borderBottom: '2px solid #eee',   
    textAlign: 'left',
    paddingBottom: '15px',
  },
  readTime: {
    fontSize: '14px',
    color: '#888',
  },
};

export default BlogCard;
