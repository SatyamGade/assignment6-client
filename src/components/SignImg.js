import { Link } from "react-router-dom";
const SignImg = () => {
    return (
        <div className="signUpImg lg:relative">
            <div className="signUpTextDiv">
                <span className="logoTxt">dribble</span>
                <h1 className="font-bold text-xl lg:pt-6 pt-2 text-yellow-800">Discover the world's top Designers & Creatives.</h1>
            </div>
            <span className="font-light mb-8 lg:ml-12 ml-8 absolute bottom-0 text-yellow-800 text-sm">Art by <Link to="/" className="underline ">Peter Tarka</Link></span>
        </div>
    )
}

export default SignImg
