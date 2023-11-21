import { TWeather, TimeOfDay } from "../interrfaces";

export const getTimeOfDay = (
  currentTimeString: string,
  sunriseTimeString: string,
  sunsetTimeString: string
): TimeOfDay => {
  // return "sunset";

  const currentTime = new Date(currentTimeString);
  const sunriseTime = new Date(currentTimeString);
  const sunsetTime = new Date(currentTimeString);

  const sunriseTimeArray = sunriseTimeString.split(" ");
  const srTime = sunriseTimeArray[0];
  const srHour = Number(srTime.split(":")[0]);
  const srMin = Number(srTime.split(":")[1]);
  sunriseTime.setHours(srHour, srMin);

  const sunsetTimeArray = sunsetTimeString.split(" ");
  const ssTime = sunsetTimeArray[0];
  const ssHour = Number(ssTime.split(":")[0]) + 12;
  const ssMin = Number(ssTime.split(":")[1]);
  sunsetTime.setHours(ssHour, ssMin);

  const SRAbsoluteTime = sunriseTime.getTime() / (1000 * 60);
  const SSAbsoluteTime = sunsetTime.getTime() / (1000 * 60);
  const CurrentAbsoluteTime = currentTime.getTime() / (1000 * 60);

  const sunriseDX = CurrentAbsoluteTime - SRAbsoluteTime;
  const sunsetDX = SSAbsoluteTime - CurrentAbsoluteTime;
  const dayLength = SSAbsoluteTime - SRAbsoluteTime;

  // if (Math.abs(sunriseDX) <= 30) return "sunrise";
  // if (Math.abs(sunsetDX) <= 30) return "sunset";

  if (sunriseDX <= 30 && sunriseDX > 0) return "sunrise";
  if (sunsetDX <= 30 && sunsetDX > 0) return "sunset";

  if (
    CurrentAbsoluteTime < SRAbsoluteTime ||
    CurrentAbsoluteTime > SSAbsoluteTime
  ) {
    return "night";
  }

  return "day";
};

export const BlankWeatherObject: TWeather = {
  current: {
    temp_f: 0,
    temp_c: 0,
    condition: {
      text: "",
      icon: "",
      code: 0,
    },
    wind_mph: 0,
    wind_degree: 0,
    wind_dir: "",
    humidity: 0,
    cloud: 0,
    feelslike_f: 0,
    feelslike_c: 0,
  },
  forecast: {
    forecastday: [
      {
        astro: {
          is_moon_up: 0,
          is_sun_up: 0,
          moon_illumination: 0,
          moon_phase: "",
          moonrise: "",
          moonset: "",
          sunrise: "",
          sunset: "",
        },
        day: {
          avghumidity: 0,
          avgtemp_c: 0,
          avgtemp_f: 0,
          avgvis_km: 0,
          avgvis_miles: 0,
          condition: { code: 0, icon: "", text: "" },
          daily_chance_of_rain: 0,
          daily_chance_of_snow: 0,
          daily_will_it_rain: 0,
          daily_will_it_snow: 0,
          maxtemp_c: 0,
          maxtemp_f: 0,
          maxwind_kph: 0,
          maxwind_mph: 0,
          mintemp_c: 0,
          mintemp_f: 0,
          totalprecip_mm: 0,
          totalsnow_cm: 0,
          uv: 0,
        },
        date: "",
        hour: [
          {
            chance_of_rain: 0,
            chance_of_snow: 0,
            cloud: 0,
            condition: {
              code: 0,
              icon: "",
              text: "",
            },
            dewpoint_c: 0,
            dewpoint_f: 0,
            feelslike_c: 0,
            feelslike_f: 0,
            gust_kph: 0,
            gust_mph: 0,
            heatindex_c: 0,
            heatindex_f: 0,
            humidity: 0,
            is_day: 0,
            precip_in: 0,
            precip_mm: 0,
            pressure_in: 0,
            pressure_mb: 0,
            temp_c: 0,
            temp_f: 0,
            time: "",
            time_epoch: 0,
            uv: 0,
            vis_km: 0,
            vis_miles: 0,
            will_it_rain: 0,
            will_it_snow: 0,
            wind_degree: 0,
            wind_dir: "",
            wind_kph: 0,
            wind_mph: 0,
            windchill_c: 0,
            windchill_f: 0,
          },
        ],
      },
    ],
  },
  location: {
    country: "",
    lat: 0,
    localtime: "",
    localtime_epoch: 0,
    lon: 0,
    name: "",
    region: "",
    tz_id: "",
  },
};
