import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

const Card = ({ image, description }) => {

  const [showPara, setShowPara] = useState(false);

  return (
    <div className={`text-center tracking-tight relative rounded-lg ${showPara === false ? "border border-gray-300" : "border-2 border-pink-600"} w-60 h-60`}>
      <div className={`px-4 pt-4 ${showPara === true ? "absolute -top-24" : ""}`}>
        <img src={image} alt="img" className={`mx-auto`} />
        <h1 className="font-bold mt-2">{description}</h1>
        <p className={`text-gray-500 text-sm mt-2 ${showPara === false ? "hidden" : ""}`}>With over 7 million shots from a vast community of designers. Dribble is the leading source for design inspiration</p>
        {
          showPara === false ?
            <button className="border border-gray-300 rounded-full w-5 h-5 mx-auto mt-1 cursor-pointer" onClick={(e) => setShowPara(true)}></button>
            :
            <FontAwesomeIcon icon={faCircleCheck} className="mx-auto mt-1 cursor-pointer text-xl text-pink-500" onClick={(e) => setShowPara(false)} />
        }
      </div>
    </div>
  )
}

export default Card
