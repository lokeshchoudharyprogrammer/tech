import React from 'react';
import { Link } from 'react-router-dom';



function SignIn() {
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

              <p style={{ fontWeight: 'bold', fontSize: '30px' }}>Login to your account</p>
            </div>
            <div>

              <p style={{
                fontSize: '15px',
                color: 'gray',
                fontWeight: "500"
              }}>Create an account ? <Link style={{ textDecoration: "underline", color: "black" }} to="/signup">Sign up</Link></p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: "50%" }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ float: "left", fontWeight: "500" }} htmlFor="username">Username</label>
            <input style={{
              border: '2px solid black',
              padding: '10px',
              borderRadius: '4px',


            }} type="text" name="username" id="username" placeholder='username' />

          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ float: "left", fontWeight: "500" }} htmlFor="email">Email</label>
            <input style={{
              border: '2px solid black',
              padding: '10px',
              borderRadius: '4px',

            }} type="email" name="username" id="username" placeholder='email' />

          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ float: "left", fontWeight: "500" }} htmlFor="password">Password</label>
            <input style={{
              border: '2px solid black',
              padding: '10px',
              borderRadius: '4px',

            }} type="password" name="username" id="username" placeholder='password' />

          </div>
          <div>
            <button style={{
              border: 'none ',
              width: "100%",
              padding: '10px',
              borderRadius: '4px',
              backgroundColor: "black",
              color: "white",
              fontWeight: "500"
            }}>Sign In</button>
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

export default SignIn;
