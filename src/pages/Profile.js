import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCamera } from '@fortawesome/free-solid-svg-icons'
import "../styles/profile.css";
import { useContext, useEffect, useState } from 'react';
import { JWTContext } from "../contexts/JwtProvider";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card';
import img1 from "../components/images/img1.png";
import img2 from "../components/images/img2.png";
import img3 from "../components/images/img3.png";

const Profile = () => {

  const { img, setImg } = useContext(JWTContext);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'dphabivk');

    const options = {
      method: 'POST',
      body: formData,
    };

    const res = await fetch('https://api.Cloudinary.com/v1_1/dwxejs4eu/image/upload', options);
    const data = await res.json();
    setImg(data.secure_url);
  }

  const handleClick = async (e) => {
    const formData = new FormData();
    formData.append('file', "https://source.unsplash.com/random");
    formData.append('upload_preset', 'dphabivk');

    const options = {
      method: 'POST',
      body: formData,
    };

    const res = await fetch('https://api.Cloudinary.com/v1_1/dwxejs4eu/image/upload', options);
    const data = await res.json();
    setImg(data.secure_url);
  }

  const [userLocation, setUserLocation] = useState("");
  const [nextPage, setNextPage] = useState(false);
  const handleNextPage = (e) => {
    setNextPage((state) => !state);
  }

  useEffect(() => {
    localStorage.setItem("location", userLocation);
  }, [userLocation])

  return (
    <>
      {
        nextPage === false ?
          <section>
            <h1 className="profileLogo m-8">dribble</h1>
            <div className="lg:w-2/5 w-4/5 mx-auto">
              <h1 className="text-3xl font-bold mb-2 tracking-tight">Welcome! Let's create your profile</h1>
              <p className="text-gray-600 text-base mb-6 tracking-tight">Let others get to know you better! You can do this later</p>
              <label className="tracking-tight font-bold">Add an avtar</label><br />
              <div className="mt-5 flex avtardiv">
                {
                  img === "" ?
                    <div className={`w-44 h-44 rounded-full border-2 border-gray-300 border-dashed flex items-center justify-center`}>
                      <FontAwesomeIcon icon={faCamera} className="text-2xl text-gray-400" />
                    </div>
                    :
                    <img src={img} alt="img" className="w-44 h-44 rounded-full object-cover" />
                }
                <div className="lg:ms-12 avatarText">
                  <input type="file" name="img" id="img" onChange={handleChange} className="hidden" />
                  <label htmlFor="img" className="tracking-tight border px-3 cursor-pointer py-2 border-gray-300 rounded-lg text-sm font-medium">Choose Image</label>
                  <p onClick={handleClick} className="tracking-tight text-gray-500 text-base font-medium cursor-pointer mt-4">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Or choose one of our defaults
                  </p>
                </div>
              </div>
              <div className="my-12 w-full">
                <label className="tracking-tight font-bold">Add your location</label><br />
                <input type="text" placeholder="Enter a location" name="userLocation" value={userLocation} onChange={(e) => setUserLocation(e.target.value)} className="tracking-tight mt-3 w-full outline-none border-b pb-1" />
              </div>
              <button disabled={userLocation === "" || img === ""} className={`tracking-tight bg-pink-300 ${userLocation === "" || img === "" ? "cursor-not-allowed" : "hover:bg-pink-500"} px-20 text-white rounded-lg text-sm py-2`} onClick={(e) => handleNextPage(e)}>Next</button>
              <p className="tracking-tight text-gray-500 text-sm cursor-pointer my-2 px-9" onClick={(e) => navigate("/")}>or Press RETURN</p>
            </div>
          </section>
          :
          <section>
            <div className="m-8 flex items-center">
              <h1 className="profileLogo me-8">dribble</h1>
              <FontAwesomeIcon icon={faAngleLeft} className="cursor-pointer py-3 px-4 rounded-lg bg-gray-100" onClick={(e) => handleNextPage(e)} />
            </div>
            <div className="w-3/4 mx-auto">
              <h1 className="text-3xl text-center font-bold mb-2 tracking-tight">What brings you to Dribble?</h1>
              <p className="text-gray-600 text-center text-base mb-6 tracking-tight">Select the options that best describe you. Don't worry, you can explore other options later.</p>
              <div className="flex justify-around mt-20 mb-12 cardDiv">
                <Card image={img1} description={"I'm a designer looking to share my work"}/>
                <Card image={img2} description={"I'm looking to hire a designer"}/>
                <Card image={img3} description={"I'm looking for design inspiration"}/>
              </div>
              <div className="mx-auto text-center tracking-tight">
                <h4 className="font-medium">Anything else? You can select multiple</h4>
                <button className="mt-4 bg-pink-300 px-20 text-white rounded-lg text-sm py-2 hover:bg-pink-500" onClick={(e)=> navigate("/")}>Finish</button>
                <p className=" text-gray-500 text-sm cursor-pointer my-2" onClick={(e) => navigate("/")}>or Press RETURN</p>
              </div>
            </div>
          </section>
      }
    </>
  )
}

export default Profile
