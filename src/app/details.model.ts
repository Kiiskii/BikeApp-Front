import { Station } from './station.model';

export interface Details {
  stations: Station[];
  departurecount: number;
  returncount: number;
}
