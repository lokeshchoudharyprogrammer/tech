import React from 'react'
import { Link } from 'react-router-dom'

interface props {
  OnClick: () => void
}
export const NavBar = ({ OnClick }: props) => {

  const author = "Lokesh"
  const currentPath = window.location.pathname


  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px", borderBottom: "1px solid gray" }}>
      <div>
        <p style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "black",
          cursor: "pointer"
        }}>
          <Link to="/blog" style={{
            color: "black",
            textDecoration: "none"
          }}>
            Medium
          </Link>
        </p>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <div>
          <button onClick={OnClick} style={{
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "green",
            color: "white",
            marginRight: "9px",
            cursor: "pointer"
          }}>{currentPath == "/publish" ? "Publish" : <Link style={{
            color: "white",
            textDecoration: "none"
          }} to="/publish">Create Post</Link>}</button>
        </div>
        <div style={styles.avatar}>{author.charAt(0)}</div>

      </div>
    </div>
  )
}


const styles = {
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
    cursor: "pointer"
  }
}