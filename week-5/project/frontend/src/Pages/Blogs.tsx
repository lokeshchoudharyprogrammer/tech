import React, { useEffect } from 'react';
import BlogCard from '../components/BlogCard.tsx';
import { BACKEND_URL } from '../service/config.ts';
import { NavBar } from '../components/NavBar.tsx';

interface Blog {
  id: string;
  time: string;
  title: string;
  content: string;
  published: string;
  authorId: string;
}


function Blogs() {

  const [blogs, setBlogs] = React.useState<Blog[]>([]);


  useEffect(() => {
    async function getBlogs() {
      fetch(`${BACKEND_URL}/api/v1/blog/blogs`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("token")}`
        }
      }).then(res => res.json()).then((res) => {
        setBlogs(res.posts)
      })
    }
    getBlogs()
  }, [])
  if (blogs.length === 0) {
    return (
      <>
        <NavBar OnClick={() => { }} />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <h1>Loading...</h1>
        </div>
      </>
    )
  }
  return (
    <>
      <NavBar OnClick={() => { }} />
      <div>
        {
          blogs.reverse().map((blog, index) => (
            <BlogCard
              time={blog.time}
              value={blog.id}
              author={blog["author"].name}
              title={blog.title}
              content={blog.content}
            />
          ))
        }

      </div>
    </>
  );
}

export default Blogs;
