import React, {useState} from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
import { Navigate } from 'react-router-dom';


export default function SignUpPage() {

  const [username,setName]=useState("");
  const [email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const [CPassword,setCPassword]=useState("");
  const HandleonClick = () => {
 if( username ==="" && email==="" && Password ==="" && Password===CPassword)
 {
  alert("Password Doest Match")
  }
  else{
    axios.post("http://localhost:5000/signup", { username: username,email: email, password: Password })
    .then(res => {
      console.log(res.data);
      <Navigate to="/" />;
      alert("Hurray")
    })
    .catch(error => {
      console.error(error);
    });
   
  }
};
  return (
    <>
      <div className="flex mx-24 my-20 ">
        <div className="flex-1 bg-black p-4 ">
          <div className=" mx-auto w-96 my-8">
            <input
              id="username"
              type="text"
              placeholder="User Name"
              className=" rounded-full mb-7 h-12 px-6 py-4 border-2 text-orange-500 border-orange-500 text-orange-500 bg-black  w-96"
              onChange={(event)=>{
                setName(event.target.value)
              }}
            ></input>
            <input
              type="text"
              placeholder="example@gmail.com"
              className=" rounded-full mb-7 h-12 px-6 py-4 border-2 text-orange-500 border-orange-500 text-orange-500 bg-black  w-96"
              onChange={(event)=>{
                setEmail(event.target.value)
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className=" rounded-full mb-7 h-12 px-6 py-4 border-2 text-orange-500 border-orange-500 bg-black text-orange-500 w-96"
              onChange={(event)=>{
                setPassword(event.target.value)
              }}
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              className=" rounded-full h-12 px-6 py-4 border-2 text-orange-500 border-orange-500 bg-black text-orange-500 w-96"
              onChange={(event)=>{
                setCPassword(event.target.value)
              }}
            >
            </input>
            {/* <Link to="/"> */}
            Go to SignUp
            <button
              onClick={HandleonClick}
              className=" rounded-full h-12 px-6 mt-10 border-2 text-white border-none bg-orange-500 bg-black  w-96"
            >
              Submit
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="flex-1 bg-orange-500 p-4">
          <img src="/Quill.png" alt="Logo" className=" w-96 mx-16 mt-24 mb-12"></img>
          <p className=" font-sans text-white font-bold mx-16 my-10 ">
            Empowering Your Daily Voice: Seamlessly Manage and Share Your Unique
            Stories Every Day on Our Blogging Platform.
          </p>
        </div>
      </div>
    </>
  );
}
