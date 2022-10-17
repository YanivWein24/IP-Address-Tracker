import React, { useState } from "react";
import { LatLngExpression } from "leaflet";
import { location } from "./location";
import Map from "./Map/Map";
import Search from "./Search/Search";
import "./App.css";

function App() {
  const [ip, setIp] = useState<string>("");
  const [location, setLocation] = useState<location<LatLngExpression>>({
    localIp: "",
    city: "",
    country: "",
    timeZone: "",
    position: [51.505, -0.09],
    isp: "",
  });

  return (
    <div className="app">
      <Search
        ip={ip}
        setIp={setIp}
        location={location}
        setLocation={setLocation}
      />
      <Map location={location} setLocation={setLocation} />
    </div>
  );
}

export default App;
