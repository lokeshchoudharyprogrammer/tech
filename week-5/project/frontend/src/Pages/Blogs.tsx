import React, { useEffect } from 'react';
import BlogCard from '../components/BlogCard.tsx';
import { BACKEND_URL } from '../service/config.ts';

interface Blog {
  id: string;
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
  console.log(blogs)
  return (
    <div>
      {
        blogs.map((blog) => (
          <BlogCard
           value={blog.id} 
          title={blog.title}
          content={blog.content}
          />
        ))
      }

    </div>
  );
}

export default Blogs;
