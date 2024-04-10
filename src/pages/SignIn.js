import { Link } from "react-router-dom";
import "../styles/signUpIn.css";
import SignImg from "../components/SignImg";
import { useContext, useState } from "react";
import {JWTContext} from "../contexts/JwtProvider";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const URL = "https://assignment6-server-sepia.vercel.app/api/auth/login";

const SignIn = () => {

  const navigate = useNavigate();

  const { setJwtTokenToLS } = useContext(JWTContext);
  const [err, setErr] = useState("");

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })

      const resData = await response.json();
      if (response.ok) {
        setUserInfo({
          username: "",
          password: ""
        })
        toast.success(resData.message);
        setJwtTokenToLS(resData.token);
        navigate("/");
      } else {
        setErr(resData.message);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section className="signUp">
      <SignImg />
      <span className="lg:absolute lg:right-0 lg:me-8 mt-6 text-sm alreadyMember">Don't have an account? <Link to="/register" className="text-blue-600">Sign Up</Link></span>
      <div className={"signUpForm"}>
        <div>
          <h1 className="font-bold text-xl mb-4">Sign In to Dribble</h1>
          <li className={`text-red-500 text-sm ms-2 tracking-tight ${err===""?"hidden":""}`}>{err}</li>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="username" className="font-bold">Username</label><br />
              <input className="outline-0 bg-gray-100 p-2 mt-1 rounded-lg w-full font-light text-sm" type="text" placeholder="Enter your username" name="username" value={userInfo.username}  onChange={handleChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold">Password</label><br />
              <input className="outline-0 bg-gray-100 p-2 mt-1 rounded-lg w-full font-light text-sm" type="password" placeholder="Enter your password" name="password" value={userInfo.password}  onChange={handleChange}/>
            </div>
            <button className="mb-4 bg-pink-500 px-10 text-white rounded-lg text-sm py-2" type="submit">Create Account</button>
            <p className="text-xs lg:w-80 tracking-tight font-light">This site is protected by reCAPTCHA and the Google <span className="text-blue-800 font-normal cursor-pointer">Privacy Policy</span> and <span className="text-blue-800 font-normal cursor-pointer">Terms of Service</span> apply</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
