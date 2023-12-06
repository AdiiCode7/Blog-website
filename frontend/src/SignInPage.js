import React, { useState } from "react";
import axios from "axios"
import {Link} from "react-router-dom"


export default function SignInPage() {
  const [username, SetUsername]= useState("");
  const [password, SetPassword]= useState("");


const HandleonClick = () => {

    axios.post("http://localhost:5000/login", { username: username, password: password })
    .then(res => {
      if (res.status === 200) {
        console.log("Data Submitted");
        console.log(res.data);
        alert("Logged In");
        // You can perform additional actions here, such as updating the UI or redirecting the user.
      } 
      // else if(res.status === 401) 
      // {
      //   alert("Invalid credentials");
      //   console.log("Invalid credentials");
      //   // You might want to handle invalid credentials differently, such as showing an error message.
      // }
      else{
        alert("Invalid credentials");
        console.log("Internal Server Error")
      }
    })
    .catch(error => {
      console.error(error);
    });
};
  return (
    <>
      <div className="flex mx-24 my-20 rounded-lg">
        <div className="flex-1 bg-orange-500 p-4">
          <img src="/Quill.png" alt="Logo" className=" w-64 mx-32 my-24"></img>
          <p className=" font-sans text-white font-bold mx-10 my-10 ">
            Empowering Your Daily Voice: Seamlessly Manage and Share Your Unique
            Stories Every Day on Our Blogging Platform.
          </p>
        </div>
        <div className="flex-1 bg-black p-4 container">
          <div className=" mx-auto w-96 my-24">
            <input
            onChange={(event)=>{
              SetUsername(event.target.value)
            }}
              type="text"
              placeholder="User Name"
              className=" rounded-full mb-7 h-12 px-6 py-4 border-2 text-orange-500 border-orange-500 text-orange-500 bg-black  w-96"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className=" rounded-full h-12 px-6 py-4 border-2 text-orange-500 border-orange-500 bg-black text-orange-500 w-96"
              onChange={(event)=>{
              SetPassword(event.target.value)
            }}></input>
            <button onClick={HandleonClick} className=" rounded-full h-12 px-6 mt-10 border-2 text-white border-none bg-orange-500 bg-black  w-96">
              Submit
            </button>
            <hr className="m-auto border-orange-500 w-80" />
            <p className="text-white m-auto w-64 mt-4">
              Don't have an account?{" "}
              <span className="text-orange-500">
              <Link to="/signup">
                <button>
                  Sign Up
                </button>
                </Link>
              </span>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
