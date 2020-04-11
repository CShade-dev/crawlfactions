import React from 'react';
import './App.css';
import logo from '../src/assets/Crawl.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import discord from '../src/assets/discord.png';
import shop from '../src/assets/shop.png';
import key from '../src/assets/key.png';

function App() {
  function copyFunc() {
    let tooltip = document.getElementById("tooltip")
    tooltip.innerHTML = "Copied!"
    setTimeout(() => {tooltip.innerHTML = "Click to copy"}, 2000)
  }
  function navFunc () {
    const el = document.querySelector("nav");
    el.classList.toggle("change");
  };
  return (
    <>
    <div className="logodiv">
    <img src={logo} className="logo" alt="CrawlFactions Logo"/>
    <CopyToClipboard text="play.crawlfactions.com">
    <p className="serverip" id="serverip" onClick={copyFunc}>play.CrawlFactions.com
    <span className="tooltip" id="tooltip">Click to copy</span>
    </p>
    </CopyToClipboard>
    </div>
    <div className="App">
    </div>
    <nav>
    <div className="hamburger" onClick={navFunc}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
    <div className="navigation">
      <div className="links">
        <a href="http://crawlfactions.tebex.io/" className="shoplink">
          <div className="shop">
            <div className="shopicon">
              <img className="shopimg" src={shop} alt="Click to visit our shop." />
            </div>
            <div className="shoptext">
              <p className="shopp">Click here to go to our shop page!</p>
            </div>
          </div>
        </a>
        <a href="https://linkslist.app/IVSE3CH" className="votelink">
          <div className="vote">
            <div className="voteicon">
              <img src={key} className="keylogo" alt="Click here to view our voting sites." />
            </div>
            <div className="votetext">
              <p className="votep">Click here to see a list of our voting links!</p>
            </div>
          </div>
        </a>
        <a className="discordlink" href="https://discord.gg/q2by2Tj">
          <div className="discord">
            <div className="discordicon">
              <img src={discord} className="discordlogo" alt="Click here to join our discord." />
            </div>
            <div className="discordtext">
              <p className="discordp">Click here to go to our discord!</p>
            </div>
          </div>
        </a>
        </div>
    </div>
    </nav>
    </>
  );
}

export default App;
