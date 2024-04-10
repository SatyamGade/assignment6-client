import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <section className="lg:p-16 p-4 flex justify-between tracking-tight footerSection">
        <div className="lg:w-96 me-6">
          <h1 className="footerLogo mb-4 w-min cursor-pointer">dribble</h1>
          <p className="leading-5 mb-4 text-gray-700 font-medium" style={{ width: "95%" }}>Dribble is the world's leading community for creatives to share, grow, and get hired.</p>
          <div className="flex justify-between w-2/5">
            <FontAwesomeIcon icon={faBasketball} className="cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
            <FontAwesomeIcon icon={faFacebook} className="cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" />
            <FontAwesomeIcon icon={faPinterest} className="cursor-pointer" />
          </div>
        </div>
        <section className="grid lg:grid-cols-5 grid-cols-2 gap-4 gridSection">
          <div className="lg:leading-9">
            <h4 className="font-bold">For designers</h4>
            <ul className="text-gray-700 font-medium">
              <li><Link to="/"> Go Pro!</Link></li>
              <li><Link to="/"> Explore design work</Link></li>
              <li><Link to="/"> Design blog</Link></li>
              <li><Link to="/"> Overtime podcast</Link></li>
              <li><Link to="/"> Playoffs</Link></li>
              <li><Link to="/"> Weekly Warm-Up</Link></li>
              <li><Link to="/"> Refer a Friend</Link></li>
              <li><Link to="/"> Code of conduct</Link></li>
            </ul>
          </div>
          <div className="lg:leading-9">
            <h4 className="font-bold">Hire designers</h4>
            <ul className="text-gray-700 font-medium">
              <li><Link to="/"> Post a job opening</Link></li>
              <li><Link to="/"> Post a freelance project</Link></li>
              <li><Link to="/"> Search for designers</Link></li>
              <h4 className="font-bold">Brands</h4>
              <li><Link to="/"> Advertise with us</Link></li>
            </ul>
          </div>
          <div className="lg:leading-9">
            <h4 className="font-bold">Company</h4>
            <ul className="text-gray-700 font-medium">
              <li><Link to="/"> About</Link></li>
              <li><Link to="/"> Careers</Link></li>
              <li><Link to="/"> Support</Link></li>
              <li><Link to="/"> Media kit</Link></li>
              <li><Link to="/"> Testimonials</Link></li>
              <li><Link to="/"> API</Link></li>
              <li><Link to="/"> Terms of service</Link></li>
              <li><Link to="/"> Privacy policy</Link></li>
              <li><Link to="/"> Cookie policy</Link></li>
            </ul>
          </div>
          <div className="lg:leading-9">
            <h4 className="font-bold">Directories</h4>
            <ul className="text-gray-700 font-medium">
              <li><Link to="/"> Design jobs</Link></li>
              <li><Link to="/"> Designers for hire</Link></li>
              <li><Link to="/"> Freelance designers for hire</Link></li>
              <li><Link to="/"> Tags</Link></li>
              <li><Link to="/"> Places</Link></li>
            </ul>
            <h4 className="lg:font-bold">Design assets</h4>
            <ul className="text-gray-700 font-medium">
              <li><Link to="/"> Dribble Marketplace</Link></li>
              <li><Link to="/"> Creative Market</Link></li>
              <li><Link to="/"> Fontspring</Link></li>
              <li><Link to="/"> Font Squirrel</Link></li>
            </ul>
          </div>
          <div className="lg:leading-9">
            <h4 className="font-bold">Design Resources</h4>
            <ul className="text-gray-700 font-medium">
              <li><Link to="/"> Freelancing</Link></li>
              <li><Link to="/"> Design Hiring</Link></li>
              <li><Link to="/"> Design Portfolio</Link></li>
              <li><Link to="/"> Design Education</Link></li>
              <li><Link to="/"> Creative Process</Link></li>
              <li><Link to="/"> Design Industry Trends</Link></li>
            </ul>
          </div>
        </section>
      </section>
      <section className="lg:mx-16 mx-4 py-8 border-t tracking-tight flex justify-between copyRights">
        <p className="text-gray-700"> &copy; 2023 Dribble. All rights reserved.</p>
        <p className="text-gray-700"><span className="font-bold text-black">20,501,853</span> shots dribbled <FontAwesomeIcon icon={faBasketball} className="text-pink-600"/></p>
      </section>
    </footer>
  )
}

export default Footer
