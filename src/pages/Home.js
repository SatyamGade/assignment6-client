import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { JWTContext } from "../contexts/JwtProvider";

const Home = () => {

  const { userAuth } = useContext(JWTContext);

  return (
    <>
      <Navbar />
      <main className="lg:w-2/4 w-4/5 mx-auto my-20 text-center tracking-tight">
        <h1 className="text-3xl font-bold mb-3">Please verify your email...</h1>
        <div className="relative w-min mx-auto">
          <FontAwesomeIcon icon={faEnvelope} className="text-7xl text-gray-400" />
          <FontAwesomeIcon icon={faCircleCheck} className="absolute top-0 text-3xl text-pink-600 bg-white rounded-full" style={{ right: "-8px" }} />
        </div>
        <p className="text-gray-600 text-base mb-4 font-medium">Please verify your email address. We've sent a confirmation email to:</p>
        <h2 className="mb-4 tracking-tight font-bold">{userAuth.email}</h2>
        <p className="text-gray-600 text-base mb-4 font-medium">Click the confirmation link in that email to begin using Dribble.</p>
        <p className="text-gray-600 text-base mb-4 font-medium">Didn't received the email? Check your Spam Folder, it may have been caught by a filter. If you still don't see it, you can <span className="text-pink-600 cursor-pointer" >resend the confirmation email.</span></p>
        <p className="text-gray-600 text-base font-medium">Wrong email address? <span className="text-pink-600 cursor-pointer">Change it.</span></p>
      </main>
      <Footer />
    </>
  )
}

export default Home
