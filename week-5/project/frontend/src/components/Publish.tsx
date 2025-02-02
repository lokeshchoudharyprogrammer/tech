import React, { use, useState } from "react";
import { NavBar } from "./NavBar.tsx";
import { BACKEND_URL } from "../service/config.ts";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const [story, setStory] = useState('')
    const [title, setTitle] = useState('')
    const nav=useNavigate()
    async function CreatePost() {
        console.log(story)
        try {
            const res = await fetch(`${BACKEND_URL}/api/v1/blog`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    title: title,
                    content: story,
                }),
            });
            const data = await res.json();
            nav("/blog")
        } catch (error) {
            console.error("Error fetching blog:", error);
        }
    }


    return (
        <>
            <NavBar OnClick={CreatePost} />
            {/* @ts-ignore */}
            <div style={styles.container}>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.title}
                    type="text"
                    placeholder="Enter your Blog Title..."
                />
                <textarea
                    // @ts-ignore
                    style={styles.story}
                    placeholder="Tell your story..."
                    onInput={(e) => {
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
                        // @ts-ignore
                        setStory(e.target.value)
                    }}
                />
            </div>
        </>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
        width: "100%",
    },
    title: {
        width: "60%",
        fontSize: "1.8rem",
        border: "none",
        borderBottom: "1px solid gray",
        outline: "none",
        padding: "10px",
        marginBottom: "20px",
        color: "#333",
        backgroundColor: "transparent"
    },
    story: {
        width: "60%",
        minHeight: "250px",
        fontSize: "1.2rem",
        border: "none",
        outline: "none",
        padding: "10px",
        resize: "none",
        color: "#333",
        backgroundColor: "transparent",
        lineHeight: "1.6",
        overflowY: "auto", // Enables scrolling when needed
        wordWrap: "break-word", // Ensures long words break properly
        whiteSpace: "pre-wrap", // Preserves formatting
    }

};
