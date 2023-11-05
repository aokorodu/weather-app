export type TCondition = {
  code: number;
  icon: string;
  text: string;
};

export type TCurrentWeather = {
  cloud: number;
  condition: TCondition;
  temp_f: number;
  wind_mph: number;
};
