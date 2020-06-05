import React from 'react';
import './simple-map.css';
//import {StateMap} from '../simple-map-state/simple-map-state'

import { ComposableMap,
  Geographies,
  Geography,
  } from "react-simple-maps";

const geoUrl =
  "/maps/IND_1.json";

export const SimpleMap = ({setTooltipContent, onStateClick}) => {
 
  const handleClick = geo => (e) => {
    e.preventDefault();
    onStateClick(geo.NAME_1);
  };
  
  return(
<ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 500, center: [78.167343, 21.717407]}}
      width={600}
   height={280}
   style={{
      width: "100%",
      height: "auto",
   }}
   data-tip=""
>

<Geographies  geography={geoUrl}>  
  {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill="" stroke="" strokeWidth="0.5"
            onMouseEnter={() => {
              const { NAME_1 } = geo.properties;
              setTooltipContent(`${NAME_1} — Active Malls: 15`);
            }}
            onMouseLeave={() => {
              setTooltipContent("");
            }} 
            style={{
              default: {
                 fill: "#F4F4F5",
                 stroke: "#B4B4BB",
                 strokeWidth: 0.25,
                 outline: "none",
              },
              hover: {
                 fill: "#E48577",
                 stroke: "#D64933",
                 strokeWidth: 0.25,
                 outline: "none",
              },
              pressed: {
                fill: "#FF5722",
                stroke: "#607D8B",
                strokeWidth: 1,
                outline: "none",
             }
           }}
          onClick={handleClick(geo.properties)}
           />)
          }
  </ Geographies>
</ ComposableMap>

  );
  
}