import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../service/config.ts";

interface Blog {
  id: string;
  title: string;
  content: string;
  published: string;
  authorId: string;
}

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const author = "Lokesh";

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setBlog(data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    }
    fetchBlog();
  }, [id]);

  if (!blog) return <div style={styles.loading}>Loading...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.title}>{blog.title}</h1>
        <p style={styles.date}>{new Date(blog.published).toDateString()}</p>
        <p style={styles.content}>{blog.content}</p>
      </div>
      <div style={styles.authorCard}>
        <div style={styles.avatar}>{author.charAt(0)}</div>
        <div style={styles.meta}>
          <span style={styles.author}>{author}</span>
          <span style={styles.date}>{new Date().toISOString().split("T")[0]}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
    width: "80%",
    margin: "auto",
    marginTop: "40px",
    padding: "20px",
  },
  contentWrapper: {
    width: "70%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  date: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "20px",
  },
  content: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#333",
  },
  authorCard: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    borderRadius: "8px",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#4a4949",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold",
    marginRight: "15px",
  },
  author: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "#333",
  },
  loading: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginTop: "50px",
  },
  meta:{
    display:"flex",
    flexDirection:"column"
  }
};

export default Blog;
