import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/oceania.json";



const MapChart = (props) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        center: [-5, -3],
        rotate: [-138.0, 25.0, 0],
        scale: 1000
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#F0C88E"
              stroke="#FB9E09"
            />
          ))
        }
      </Geographies>
        <Marker key={props.markers.name} coordinates={props.markers.coordinates}>
          <circle r={10} fill="#D13704" stroke="#FB9E09" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={-15}
            style={{ fontFamily: "system-ui", fill: "#65463E" }}
          >
            {props.markers.name}
          </text>
        </Marker>
    </ComposableMap>
  );
};

export default MapChart;
