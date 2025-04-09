import { useState, useEffect } from 'react'
import './styles/styles.scss'
import web3desktop from "./assets/image-web-3-desktop.jpg"
import web3mobile from "./assets/image-web-3-mobile.jpg"
import retropcs from "./assets/image-retro-pcs.jpg"
import toplaptops from "./assets/image-top-laptops.jpg"
import gaminggrowth from "./assets/image-gaming-growth.jpg"
import logo from "./assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <main>
     <nav className='navbar'>
      <div>
        {/* Logo */}
        <img src={logo} id="logo" alt="logo"/>

        {/* Desktop Menu */}
        <ul style={{display:"hidden"}}>
          {navItems.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Burger Icon */}
        <div className="navbar__burger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (<FontAwesomeIcon icon={faX} size={24}/>) : ( <FontAwesomeIcon icon={faBars} size={24}/>)}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={`navbar__menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item}
              className="navbar__item"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
     </nav> 

     <div id="grid-container">
           {isMobile ? (
          <img src={web3mobile} alt="Mobile image" id="mobile-image"/>
        ) : (
          <img src={web3desktop} alt="Desktop image" id="desktop-image"/>
        )}
    
       <div id="details-section">
        <h1>The Bright Future of Web 3.0?</h1>
        <div id="details-section-desc">
          <p> We dive into the next evolution of the web that claims to put the power 
            of the platforms back into the hands of the people. But is it really fulfilling its promise?
          </p>
          <button id="read-more-button">Read more</button>
        </div>
      </div>

      <div id="new-section">
        <h2>New</h2>
        <div className="new-item">
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs? </p>
        </div>
        <hr></hr>
        <div className="new-item">
          <h3> The Downsides of AI Artistry</h3>
          <p> What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <hr></hr>
        <div className="new-item">
          <h3> Is VC Funding Drying Up?</h3>
          <p> Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>

      <div id="trending-section">
        <div className="trending-item">
          <img src={retropcs} alt="retro pcs image"/>
          <div className="trending-item-details">   
            <p className="trending-item-number">01</p>
            <h4> Reviving Retro PCs </h4>
            <p>What happens when old PCs are given modern upgrades?</p> 
          </div>
         
        </div>
        <div className="trending-item">
          <img src={toplaptops} alt="top laptops 2022 image"/>
          <div className="trending-item-details"> 
            <p className="trending-item-number">02</p>
            <h4>Top 10 Laptops of 2022</h4>   
            <p>Our best picks for various needs and budgets.</p>
          </div>
         
        </div>
        <div className="trending-item">
          <img src={gaminggrowth} alt="gaming growth image"/>
          <div className="trending-item-details"> 
            <p className="trending-item-number">03 </p>
            <h4>The Growth of Gaming</h4> 
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div> 
    </main>
    </>
  )
}

export default App
