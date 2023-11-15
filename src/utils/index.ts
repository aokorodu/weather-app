import { TimeOfDay } from "../interfaces";

export const getTimeOfDay = (
  currentTimeString: string,
  sunriseTimeString: string,
  sunsetTimeString: string
): TimeOfDay => {
  //return "sunset";

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

  console.log(
    `CurrentAbsoluteTime ${CurrentAbsoluteTime} SRAbsoluteTime: ${SRAbsoluteTime} SSAbsoluteTime: ${SSAbsoluteTime}`
  );

  const sunriseDX = CurrentAbsoluteTime - SRAbsoluteTime;
  const sunsetDX = CurrentAbsoluteTime - SSAbsoluteTime;
  const dayLength = SSAbsoluteTime - SRAbsoluteTime;

  console.log("sunriseDX: ", sunriseDX);
  console.log("sunsetDX: ", sunsetDX);
  console.log("dayLength: ", dayLength);

  if (Math.abs(sunriseDX) <= 30) return "sunrise";
  if (Math.abs(sunsetDX) <= 30) return "sunset";

  if (
    CurrentAbsoluteTime < SRAbsoluteTime ||
    CurrentAbsoluteTime > SSAbsoluteTime
  ) {
    return "night";
  }

  return "day";
};
