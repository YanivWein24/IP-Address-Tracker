import { LatLngExpression } from "leaflet";

export type location<LatLngExpression> = {
  city: string;
  country: string;
  timeZone: string;
  position: LatLngExpression;
  isp: string;
};
