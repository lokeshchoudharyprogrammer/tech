import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input.tsx';

// import { SignupInput } from 'medium-common-zod-1';
import Button from '../components/Button.tsx';
import { BACKEND_URL } from '../service/config.ts';

function Signup() {
  const nav=useNavigate()
  const [postInput,setPostInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  async function sendRequest(){
    
    try {
      const res=await fetch(`${BACKEND_URL}/api/v1/user/signup   `,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(postInput)

      }).then(res=>res.json()).then((res)=>{
        console.log(res)
        localStorage.setItem("token",res.token)
        nav("/signin")
      })
    } catch (error) {
      window.alert("User already exists")
      
    }
  }
  console.log(postInput)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: "center", alignItems: "center", padding: "20px", width: "40%" }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', }}>
            <div>

              <p style={{ fontWeight: 'bold', fontSize: '30px' }}>Create an account</p>
            </div>
            <div>

              <p style={{
                fontSize: '15px',
                color: 'gray',
                fontWeight: "500"
              }}>Already have an account ? <Link style={{ textDecoration: "underline", color: "black" }} to="/signin">Sign in</Link></p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: "50%" }}>
         
          <Input type="text" placeholder="name" name="name" handleChange={(e)=>{
            setPostInput({...postInput,name:e.target.value})
          }} />
          
          <Input type="email" placeholder="email" name="email" handleChange={(e)=>{
            setPostInput({...postInput,email:e.target.value})
          }} />

          
          <Input type="password" placeholder="password" name="password" handleChange={(e)=>{
            setPostInput({...postInput,password:e.target.value})
          }}/>
          
          <div>
           <Button handleSubmit={sendRequest} type="signup" />
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: "lightgray",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%"
      }}>
        <div style={{ width: "80%", textAlign: "center" }}>
          <p style={{ fontWeight: "500", fontSize: "20px" }}>
            "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
            <br />- Jules Winnfield, CEO, Acme Inc
          </p>
        </div>
      </div>

    </div>
  );
}

export default Signup;
