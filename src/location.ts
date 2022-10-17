import { LatLngExpression } from "leaflet";

export type location<LatLngExpression> = {
  localIp: string;
  city: string;
  country: string;
  timeZone: string;
  position: LatLngExpression;
  isp: string;
};
