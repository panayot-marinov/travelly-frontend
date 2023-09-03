// Adjust iconSize to be a PointExpression or PointTuple
import {PointExpression} from "leaflet";

export const iconDefault = {
  iconUrl: 'assets/images/marker-icon.png',
  iconRetinaUrl: 'assets/images/marker-icon-2x.png',
  shadowUrl: 'assets/images/marker-shadow.png',
  iconSize: [25, 41] as PointExpression,
  iconAnchor: [12, 41] as PointExpression,
  popupAnchor: [1, -34] as PointExpression,
  tooltipAnchor: [16, -28] as PointExpression,
  shadowSize: [41, 41] as PointExpression,
};

