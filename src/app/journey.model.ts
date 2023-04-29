export interface Journey {
  id: number;
  departure: Date;
  return: Date;
  departure_station_id: string;
  departure_station_name: string;
  return_station_id: string;
  return_station_name: string;
  covered_distance: number;
  duration: number;
}
