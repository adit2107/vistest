import React, { useState } from 'react';
import ReactDOM from "react-dom";

import './App.css';
//import {SimpleMap} from './components/simple-map/simple-map'
import { MapChart } from './components/simple-map/simple-map'
import ReactTooltip from "react-tooltip";

function App() {
    const [content, setContent] = useState("");
    return (
      <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
