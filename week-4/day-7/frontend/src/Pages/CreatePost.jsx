import React, { useEffect, useState } from 'react'

export const CreatePost = () => {

    const [post, setPost] = React.useState();
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const GetPosts = async () => {
        await fetch("http://localhost:5000/posts").then(res => res.json()).then(data => {
            setPost(data.msg)
            console.log(data.msg)
        })
    }

    useEffect(() => {
        GetPosts()
    }, [])

    const handleSubmit = async () => {

        if (!title || !content) {
            alert("Please fill all the fields")
            return
        }
        if (content.length > 30) {
            alert("Content should be less than 30 characters")
            return
        }

        let res = await fetch("http://localhost:5000/create-post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content, authorId: 1 })
        })

        if (res.ok) {
            GetPosts()
            setTitle("")
            setContent("")
        }

        alert("Post created successfully")

    }


    return (
        <>
            <div>
                <h1 className='heading'>Create Post</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between", width: "90%", margin: "auto", marginTop: "5%" }}>
                <div>
                    <div className="form-container">
                        <form className="form" onSubmit={e => e.preventDefault()}>
                            <div class="form-group">
                                <label for="email">Title</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="email" name="email" required="" />
                            </div>
                            <div className="form-group">
                                <label for="textarea">Content</label>
                                <textarea value={content} onChange={(e) => setContent(e.target.value)} name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
                            </div>
                            <button onClick={handleSubmit} className="form-submit-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="scrollable-container">
                    <div className="form-container">
                        {
                            post && post.reverse().map((item) => {
                                return (
                                    <div className="posts">
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
