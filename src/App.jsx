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
     <nav className='navbar' aria-label="Main navigation">
      <div className='navbar__container'>
        {/* Logo */}
        <img src={logo} className="navbar__logo" alt="W. logo"/>

        {isMobile ? <div className="navbar__burger" onClick={() => setIsOpen(!isOpen)}  aria-controls="mobile-menu">
              {isOpen ? (<FontAwesomeIcon icon={faX} className='menu-icon'/>) : ( <FontAwesomeIcon icon={faBars} className='menu-icon'/>)}
              </div> : (
              <ul className="navbar__desktop-menu" role="menubar">
               {navItems.map((item) => (
                <li key={item} role="menuitem">
                  {item}
                </li>))}
               </ul>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar__mobile-menu">
        <ul className={`navbar__mobile-list ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item}
              className="navbar__mobile-item"
              role="menuitem"
            >
              {item}
            </li>
          ))}
        </ul>
        </div>
      )}
     </nav> 

     <div id="grid-container" role="region" aria-label="Main content grid">
           {isMobile ? (
          <img src={web3mobile} alt="Mobile image" id="mobile-image"/>
        ) : (
          <img src={web3desktop} alt="Desktop image" id="desktop-image"/>
        )}
    
       <section id="details-section" aria-labelledby="details-heading">
        <h1 id="details-heading">The Bright Future of Web 3.0?</h1>
        <div id="details-section-desc">
          <p> We dive into the next evolution of the web that claims to put the power 
            of the platforms back into the hands of the people. But is it really fulfilling its promise?
          </p>
          <button id="read-more-button" aria-label="Read more about Web 3.0">Read more</button>
        </div>
      </section>

      <aside id="new-section" aria-labelledby="new-heading">
        <h2 id="new-heading">New</h2>
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
      </aside>

      <section id="trending-section"  aria-labelledby="trending-heading">
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
      </section>
    </div> 
    </main>
    </>
  )
}

export default App
