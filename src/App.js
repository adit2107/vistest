import React, { useState } from 'react';
import ReactDOM from "react-dom";

import './App.css';
//import {SimpleMap} from './components/simple-map/simple-map'
import { SimpleMap } from './components/simple-map/simple-map';
import { StateMap } from './components/simple-map-state/simple-map-state'
import ReactTooltip from "react-tooltip";

function App() {
  const [stateclicked, setStateShow] = useState("");
  const [content, setContent] = useState("");

  function handleStateClick(stateclicked){
setStateShow(stateclicked);
  }
    
    return (
      <div>
    {stateclicked ? <StateMap showstate={stateclicked}/> : 
    [<SimpleMap key={'SimpleMap'} onStateClick={handleStateClick} setTooltipContent={setContent} />, <ReactTooltip key={'ReactTooltip'}>{content}</ReactTooltip>]}
    
      </div>
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
