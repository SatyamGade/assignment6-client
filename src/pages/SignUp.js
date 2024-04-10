import { Link } from "react-router-dom";
import "../styles/signUpIn.css";
import SignImg from "../components/SignImg";
import { JWTContext } from "../contexts/JwtProvider";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";

const URL = "http://localhost:5000/api/auth/register";

const SignUp = () => {

  const navigate = useNavigate();

  const { setJwtTokenToLS } = useContext(JWTContext);
  const [checked, setChecked] = useState(false);
  const [err, setErr] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    email: "",
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
    let userData = JSON.stringify(userInfo).replace("}", `,"isPolicy": ${checked}}`);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: userData
      })

      const resData = await response.json();
      if (response.ok) {
        setUserInfo({
          name: "",
          username: "",
          email: "",
          password: ""
        })
        setChecked(false);
        toast.success(resData.message);
        setJwtTokenToLS(resData.token);
        navigate("/profile");
      } else {
        // toast.error(resData.message);
        setErr(resData.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="signUp">
      <SignImg />
      <span className="lg:absolute lg:right-0 lg:me-8 mt-6 text-sm alreadyMember">Already a member? <Link to="/login" className="text-blue-600">Sign In</Link></span>
      <div className={"signUpForm"}>
        <div>
          <h1 className="font-bold text-xl mb-4">Sign Up to Dribble</h1>
          <li className={`text-red-500 text-sm ms-2 tracking-tight  ${err===""?"hidden":""}`}>{err}</li>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="lg:flex lg:justify-between mb-6 lg:w-full">
              <div className="lg:w-5/12">
                <label htmlFor="name" className="font-bold">Name</label><br />
                <input className="outline-0 bg-gray-100 p-2 mt-1 rounded-lg w-full font-light text-sm" type="text" placeholder="Enter your name" name="name" username="name" value={userInfo.name} onChange={handleChange} />
              </div>
              <div className="lg:w-5/12 userName">
                <label htmlFor="username" className="font-bold">Username</label><br />
                <input className="outline-0 bg-gray-100 p-2 mt-1 rounded-lg w-full font-light text-sm" type="text" placeholder="Enter username" name="username" id="username" value={userInfo.username} onChange={handleChange} />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="font-bold">Email</label><br />
              <input className="outline-0 bg-gray-100 p-2 mt-1 rounded-lg w-full font-light text-sm" type="email" placeholder="Enter your email" name="email" password="email" value={userInfo.email} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold">Password</label><br />
              <input className="outline-0 bg-gray-100 p-2 mt-1 rounded-lg w-full font-light text-sm" type="password" placeholder="Enter your password" name="password" id="password" value={userInfo.password} onChange={handleChange} />
            </div>
            <div className="flex mb-6">
              <input type="checkbox" name="check" id="check" className="me-2 self-start cursor-pointer mt-1" onChange={(e)=>setChecked(e.target.checked)}/>
              <p className="font-light leading-5 tracking-tight text-sm">Creating an account means you're okay with our <span className="text-blue-800 font-normal cursor-pointer">Terms of Service, Privacy Policy,</span> and aur default <span className="text-blue-800 font-normal cursor-pointer">Notification Settings.</span></p>
            </div>
            <button className="mb-4 bg-pink-500 px-10 text-white rounded-lg text-sm py-2" type="submit">Create Account</button>
            <p className="text-xs lg:w-80 tracking-tight font-light">This site is protected by reCAPTCHA and the Google <span className="text-blue-800 font-normal cursor-pointer">Privacy Policy</span> and <span className="text-blue-800 font-normal cursor-pointer">Terms of Service</span> apply</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp
