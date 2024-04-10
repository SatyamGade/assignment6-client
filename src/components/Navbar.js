import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBusinessTime, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { JWTContext } from '../contexts/JwtProvider';

const Navbar = () => {

  const { img } = useContext(JWTContext);
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const handleHamburger = (e)=>{
    setToggleHamburger((state)=>!state);
  }

  return (
    <header className="p-4 border-b">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="me-6 logo cursor-pointer">dribble</h1>
          <ul className={`lg:flex tracking-tight ulItems ${toggleHamburger===true? "active":""}`}>
            <li><Link to="/" className="me-6 font-medium  lg:text-gray-700">Inspiration</Link></li>
            <li><Link to="/" className="me-6 font-medium  lg:text-gray-700">Find Work</Link></li>
            <li><Link to="/" className="me-6 font-medium  lg:text-gray-700">Learn Design</Link></li>
            <li><Link to="/" className="me-6 font-medium  lg:text-gray-700">Go Pro</Link></li>
            <li><Link to="/" className=" font-medium  lg:text-gray-700">Hire Designers</Link></li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className={`flex items-center bg-slate-100 p-2 rounded-xl me-4 searchBar ${toggleHamburger===true?"active":""}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />
            <input type="search" name="" id="" className="outline-0 ps-2 bg-gray-100 w-28" placeholder='Search' />
          </div>
          <FontAwesomeIcon icon={faBusinessTime} className="me-4 text-xl text-gray-500 cursor-pointer" />
          <img src={img === "" ? "https://source.unsplash.com/random" : img} alt="img" className="profileImgNav me-4 rounded-2xl cursor-pointer object-cover" />
          <button className={`bg-pink-500 px-4 text-white rounded-lg text-sm py-2 lg:block uploadBtn ${toggleHamburger===true?"active":""}`}>Upload</button>
          <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer lg:hidden" onClick={(e)=>handleHamburger(e)}/>
          <FontAwesomeIcon icon={faX} className={`text-2xl cursor-pointer lg:hidden hideMenuBtn ${toggleHamburger===true?"active":""}`} onClick={(e)=>handleHamburger(e)} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
