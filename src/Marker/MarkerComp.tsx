import React, { useEffect, Dispatch, SetStateAction } from "react";
import { Marker, useMap, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { location } from "../location";

const MarkerComp = ({
  setLocation,
  location,
}: {
  setLocation: Dispatch<SetStateAction<location<LatLngExpression>>>;
  location: location<LatLngExpression>;
}) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(location.position, map.getZoom());
  }, [location]);

  return (
    <div>
      <Marker position={location.position}>
        <Popup>You are here</Popup>
      </Marker>
    </div>
  );
};

export default MarkerComp;
