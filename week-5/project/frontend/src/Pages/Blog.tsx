import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../service/config.ts";
import { NavBar } from "../components/NavBar.tsx";

interface Blog {
  id: string;
  time: string;
  title: string;
  content: string;
  published: string;
  authorId: string;
  author: {
    name: string;
  };
}

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

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
 {/* @ts-ignore   */}
  if (!blog) return <div style={styles.loading}>Loading...</div>;

  return (
    <div>

      <NavBar OnClick={() => {}}  />
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <h1 style={styles.title}>{blog.title}</h1>
          <span style={styles.date}>
            {new Date(blog.time).toLocaleDateString("en-GB")}
          </span>
          <p style={styles.content}>{blog.content}</p>
        </div>

        {/* ✅ Corrected Author Section */}
         {/* @ts-ignore   */}
        <div style={styles.authorCard}>
          <p style={{ fontWeight: "500", marginBottom: "8px" }}>Author</p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={styles.avatar}>
             
              {blog.author.name?.charAt(0).toUpperCase() || "U"}
            </div>
             {/* @ts-ignore   */}

            <div style={styles.meta}>
               
              <span style={styles.author}>{blog.author.name || "Unknown Author"}</span>
              <span style={styles.date}>
                {new Date(blog.time).toLocaleDateString("en-GB")}
              </span>
              <p style={{ marginTop: "8px", fontWeight: "500", textAlign: "center" }}>
            Creative storyteller & writer.
          </p>
            </div>
          </div>
          
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
  },
  content: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#333",
  },
  authorCard: {
    
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    borderRadius: "8px",
    color:"gray"
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
  meta: {
    display: "flex",
    flexDirection: "column",
  },
};

export default Blog;
