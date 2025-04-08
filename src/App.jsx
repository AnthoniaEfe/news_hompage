import './styles/styles.scss'
import web3desktop from "./assets/image-web-3-desktop.jpg"
function App() {
  

  return (
    <>
     <nav>Home New Popular Trending Categories </nav> 
     <div id="grid-container">
       <img src={web3desktop} alt="web3 banner image"/>
       <div id="details-section">
        <h1>The Bright Future of Web 3.0?</h1>
        <p> We dive into the next evolution of the web that claims to put the power 
          of the platforms back into the hands of the people. But is it really fulfilling its promise?
        </p>
        <button>Read more</button>
      </div>

      <div id="new-section">
        <h2>New</h2>
        <div className="new-item">
          <h3>   Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs? </p>
        </div>
        <div className="new-item">
          <h3> The Downsides of AI Artistry</h3>
          <p> What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div className="new-item">
          <h3> Is VC Funding Drying Up?</h3>
          <p> Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>

      <div id="trending-section">
        <div className="trending-item">
          01 Reviving Retro PCs What happens when old PCs are given modern upgrades?
        </div>
        <div className="trending-item">
          02 Top 10 Laptops of 2022 Our best picks for various needs and budgets.
        </div>
        <div className="trending-item">
          03 The Growth of Gaming How the pandemic has sparked fresh opportunities.
        </div>
      </div>
    </div> 
    </>
  )
}

export default App
