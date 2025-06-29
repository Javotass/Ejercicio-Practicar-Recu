import { CityAPI, CountryAPI, PhoneData, WeatherAPI, WorldTimeAPI } from "./types.ts";

const API_KEY = Deno.env.get("API_KEY");
if (!API_KEY) throw new Error("API_KEY not defined");

export const getPhoneData = async (phone: string): Promise<PhoneData> => {
  const res = await fetch(`https://api.api-ninjas.com/v1/validatephone?number=${phone}`, {
    headers: { "X-Api-Key": API_KEY },
  });
  if (!res.ok) throw new Error("Phone validation failed");
  return await res.json();
};

const getCountryName = async (code: string): Promise<string> => {
  const res = await fetch(`https://api.api-ninjas.com/v1/country?name=${code}`, {
    headers: { "X-Api-Key": API_KEY },
  });
  if (!res.ok) throw new Error("Country lookup failed");
  const data: CountryAPI = await res.json();
  return data[0].name;
};

export const getCityData = async (city: string) => {
  const res = await fetch(`https://api.api-ninjas.com/v1/city?name=${city}`, {
    headers: { "X-Api-Key": API_KEY },
  });
  if (!res.ok) throw new Error("City data fetch failed");
  const data: CityAPI = await res.json();
  const enriched = await Promise.all(
    data.map(async (c) => ({
      latitude: c.latitude,
      longitude: c.longitude,
      country: await getCountryName(c.country),
    }))
  );
  return enriched;
};

export const getTemperature = async (lat: string, lon: string): Promise<number> => {
  const res = await fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`, {
    headers: { "X-Api-Key": API_KEY },
  });
  if (!res.ok) throw new Error("Weather fetch failed");
  const data: WeatherAPI = await res.json();
  return data.temp;
};

export const getWorldTime = async (lat: string, lon: string): Promise<string> => {
  const res = await fetch(`https://api.api-ninjas.com/v1/worldtime?lat=${lat}&lon=${lon}`, {
    headers: { "X-Api-Key": API_KEY },
  });
  if (!res.ok) throw new Error("Time fetch failed");
  const data: WorldTimeAPI = await res.json();
  return `${data.hour}:${data.minute}`;
};
