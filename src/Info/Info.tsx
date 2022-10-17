import React from "react";
import "./Info.css";
import { location } from "../location";
import { LatLngExpression } from "leaflet";

const Info = ({
  location,
  ip,
}: {
  location: location<LatLngExpression>;
  ip: string;
}) => {
  return (
    <div className="info fade-in">
      <div className="infoContainer">
        <div className="column">
          <p>IP ADDRESS</p>
          <p className="bold">{ip}</p>
        </div>
        <div className="column">
          <p>LOCATION</p>
          <p className="bold">
            {location.city}, {location.country}
          </p>
        </div>
        <div className="column">
          <p>TIMEZONE</p>
          <p className="bold">{location.timeZone}</p>
        </div>
        <div className="column">
          <p>ISP</p>
          <p className="bold">{location.isp}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
