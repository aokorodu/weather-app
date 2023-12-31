export type TCondition = {
  code: number;
  icon: string;
  text: string;
};

export type TCurrentWeather = {
  cloud: number;
  condition: TCondition;
  temp_f: number;
  feelslike_f: number;
  humidity: number;
  wind_mph: number;
  wind_dir: string;
  wind_degree: number;
};

export type TAstro = {
  sunrise: string;
  sunset: string;
  is_moon_up: number;
  is_sun_up: number;
  moon_phase: string;
};

export type TDay = {
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
};

export type TForcastDay = {
  astro: TAstro;
  day: TDay;
};

export type TForcastWeather = {
  forecastday: TForcastDay[];
};

export type TWeather = {
  current: TCurrentWeather;
  forecast: TForcastWeather;
};

export type SkyProps = {
  sunrise: string;
  sunset: string;
  locationTime: string;
};

export type TLocation = {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};

export type TimeOfDay = "sunrise" | "day" | "sunset" | "night";
