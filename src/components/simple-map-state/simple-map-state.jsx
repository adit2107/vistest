import React from 'react';

import ReactDOM from "react-dom";

import { ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
    } from "react-simple-maps";

import { render } from '@testing-library/react';

    const markers = [
    {
      markerOffset: 3,
      name: "Forum Mall",
      coordinates: [77.6113, 12.9344]
    }
  ];

export const StateMap = (props) => {

    console.log(`From inside ${props.showstate}`);
    const geoUrl = `/maps/states/${props.showstate}.json`
    return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 1000, center: [75.7139, 15.3173]}}
      width={350}
   height={150}
   style={{
      width: "100%",
      height: "auto",
   }}
>
<ZoomableGroup>
<Geographies  geography={geoUrl}>  
  {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill="" stroke="" strokeWidth="0.5"
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
           />)
          }
  </ Geographies>
  {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
           <circle r={0.5} fill="#F00" />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontSize: "2px", fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      </ZoomableGroup>
</ ComposableMap>
    )
}