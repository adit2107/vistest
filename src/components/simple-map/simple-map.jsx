import React from 'react';
import './simple-map.css';
import {StateMap} from '../simple-map-state/simple-map-state'

import { ComposableMap,
  Geographies,
  Geography,
  } from "react-simple-maps";

const geoUrl =
  "/maps/IND_1.json";

// const markers = [
//     {
//       markerOffset: 5,
//       name: "Forum Mall",
//       coordinates: [77.6113, 12.9344]
//     },
//     {
//       markerOffset: 5,
//       name: "Mall of Travancore",
//       coordinates: [76.9261, 8.4874]
//     }

//   ];

export const MapChart = ({setTooltipContent}) => {
  const handleClick = geo => (e) => {
    e.preventDefault();
    console.log(geo.NAME_1);
   
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
               fill: "#EAEAEC",
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

{/* {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
         <circle cx="0" cy="0" r="2" fill="#F00"/>= 
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontSize:"3px", fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))} */}
</ ComposableMap>
  );
}