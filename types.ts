import { OptionalId } from "mongodb";

export type MuseumModel = OptionalId<{
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  latitude: string;
  longitude: string;
}>;

export type CityAPI = Array<{
  latitude: string;
  longitude: string;
  country: string;
}>;

export type WeatherAPI = {
  temp: number;
};

export type WorldTimeAPI = {
  hour: number;
  minute: number;
};

export type PhoneData = {
  is_valid: boolean;
  country: string;
};

export type CountryAPI = Array<{
  name: string;
}>;
