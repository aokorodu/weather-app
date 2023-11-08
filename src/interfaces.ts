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
