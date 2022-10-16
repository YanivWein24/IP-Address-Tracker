import React, { useEffect, Dispatch, SetStateAction } from "react";
import { Marker, useMap, useMapEvents, Popup } from "react-leaflet";
import { LatLngExpression, Icon, IconOptions } from "leaflet";
import { location } from "../location";
// import * as LocationIcon  from "../images/icon-location.svg"

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

  //   const map = useMapEvents({
  //   click() {
  //     map.locate()
  //   },
  //   locationfound(e) {
  //     console.log(e)
  //     setLocation({
  //       city: '',
  //       country: '',
  //       timeZone: '',
  //       position: e.latlng,
  //       isp: ''
  //     })
  //     map.flyTo(e.latlng, map.getZoom())
  //   },
  // })

  return (
    <div>
      <Marker position={location.position}>
        <Popup>You are here</Popup>
      </Marker>
    </div>
  );
};

export default MarkerComp;
