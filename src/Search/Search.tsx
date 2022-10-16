import React, { useState, Dispatch, SetStateAction } from "react";
import "./Search.css";
import { location } from "../location";
import { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";

import * as arrowIcon from "../images/icon-arrow.svg";

const Search = ({
  ip,
  setIp,
  location,
  setLocation,
}: {
  ip: string;
  setIp: Dispatch<SetStateAction<string>>;
  location: location<LatLngExpression>;
  setLocation: Dispatch<SetStateAction<location<LatLngExpression>>>;
}) => {
  const [localIp, setLocalIp] = useState<string>("");
  const [copyMessage, setCopyMessage] = useState<boolean>(false);

  const apiKey: string = process.env.REACT_APP_API_KEY
    ? process.env.REACT_APP_API_KEY
    : "error";

  const getLocalIp = () => {
    fetch("https://api.ipify.org?format=js")
      .then((res) => res.text())
      .then((data) => setLocalIp(data));
  };

  const locateIp = () => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocation({
          city: data.location.city,
          country: data.location.country,
          timeZone: data.location.timezone,
          position: [data.location.lat, data.location.lng],
          isp: data.isp,
        });
      });
  };

  return (
    <div className="search">
      <h1>IP Address Tracker</h1>
      <div className="searchContainer">
        <input
          onChange={(event) => setIp(event.target.value)}
          onKeyDown={(event) =>
            event.key === "Enter" && ip !== "" && locateIp()
          }
          value={ip}
          placeholder="Search for any IP address or domain"
        ></input>
        <button onClick={locateIp}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
      <div className="findMyIp">
        <button onClick={getLocalIp}>What's My IP?</button>
        {localIp !== "" && (
          <p
            onClick={() => {
              navigator.clipboard.writeText(localIp);
              setCopyMessage(true);
              setTimeout(() => {
                setCopyMessage(false);
              }, 2000);
            }}
          >
            {localIp} <span>(Click To Copy)</span>
          </p>
        )}
        {copyMessage && <p className="copyMessage">Copied To Clipboard!</p>}
      </div>
    </div>
  );
};

export default Search;
