import React, { Dispatch, SetStateAction } from "react";
import MarkerComp from "../Marker/MarkerComp";
import { location } from "../location";
import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const Map = ({
  location,
  setLocation,
}: {
  location: location<LatLngExpression>;
  setLocation: Dispatch<SetStateAction<location<LatLngExpression>>>;
}) => {
  return (
    <div className="Map">
      <MapContainer
        center={location.position}
        className="leaflet-container"
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={window.innerWidth <= 1024 ? false : true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerComp location={location} />
      </MapContainer>
    </div>
  );
};

export default Map;
