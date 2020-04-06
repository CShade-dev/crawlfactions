import React from 'react';
import './App.css';
import 'typeface-roboto';
import logo from '../src/assets/Crawl.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function App() {
  function copyFunc() {
    let tooltip = document.getElementById("tooltip")
    tooltip.innerHTML = "Copied!"
    setTimeout(() => {tooltip.innerHTML = "Click to copy"}, 6000)
  }
  return (
    <>
    <div className="logodiv">
    <img src={logo} className="logo" />
    <CopyToClipboard text="play.crawlfactions.com">
    <p className="serverip" id="serverip" onClick={copyFunc}>play.CrawlFactions.com
    <span className="tooltip" id="tooltip">Click to copy</span>
    </p>
    </CopyToClipboard>
    </div>
    <div className="App">
    </div>
    </>
  );
}

export default App;
