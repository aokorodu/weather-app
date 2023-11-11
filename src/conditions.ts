const conditions = [
  {
    code: 1000,
    day: "Sunny",
    night: "Clear",
    icon: 113,
    summary: "Sunny",
  },
  {
    code: 1003,
    day: "Partly cloudy",
    night: "Partly cloudy",
    icon: 116,
    summary: "Partly cloudy",
  },
  {
    code: 1006,
    day: "Cloudy",
    night: "Cloudy",
    icon: 119,
    summary: "Cloudy",
  },
  {
    code: 1009,
    day: "Overcast",
    night: "Overcast",
    icon: 122,
    summary: "Overcast",
  },
  {
    code: 1030,
    day: "Mist",
    night: "Mist",
    icon: 143,
    summary: "Fog",
  },
  {
    code: 1063,
    day: "Patchy rain possible",
    night: "Patchy rain possible",
    icon: 176,
    summary: "Light Rain",
  },
  {
    code: 1066,
    day: "Patchy snow possible",
    night: "Patchy snow possible",
    icon: 179,
    summary: "Light Snow",
  },
  {
    code: 1069,
    day: "Patchy sleet possible",
    night: "Patchy sleet possible",
    icon: 182,
    summary: "Light Sleet",
  },
  {
    code: 1072,
    day: "Patchy freezing drizzle possible",
    night: "Patchy freezing drizzle possible",
    icon: 185,
    summary: "Light Rain",
  },
  {
    code: 1087,
    day: "Thundery outbreaks possible",
    night: "Thundery outbreaks possible",
    icon: 200,
    summary: "Thunder",
  },
  {
    code: 1114,
    day: "Blowing snow",
    night: "Blowing snow",
    icon: 227,
    summary: "Snow",
  },
  {
    code: 1117,
    day: "Blizzard",
    night: "Blizzard",
    icon: 230,
    summary: "Snow",
  },
  {
    code: 1135,
    day: "Fog",
    night: "Fog",
    icon: 248,
    summary: "Fog",
  },
  {
    code: 1147,
    day: "Freezing fog",
    night: "Freezing fog",
    icon: 260,
    summary: "Fog",
  },
  {
    code: 1150,
    day: "Patchy light drizzle",
    night: "Patchy light drizzle",
    icon: 263,
    summary: "Light Rain",
  },
  {
    code: 1153,
    day: "Light drizzle",
    night: "Light drizzle",
    icon: 266,
    summary: "Light Rain",
  },
  {
    code: 1168,
    day: "Freezing drizzle",
    night: "Freezing drizzle",
    icon: 281,
    summary: "Light Rain",
  },
  {
    code: 1171,
    day: "Heavy freezing drizzle",
    night: "Heavy freezing drizzle",
    icon: 284,
    summary: "Rain",
  },
  {
    code: 1180,
    day: "Patchy light rain",
    night: "Patchy light rain",
    icon: 293,
    summary: "Light Rain",
  },
  {
    code: 1183,
    day: "Light rain",
    night: "Light rain",
    icon: 296,
    summary: "Light Rain",
  },
  {
    code: 1186,
    day: "Moderate rain at times",
    night: "Moderate rain at times",
    icon: 299,
    summary: "Light Rain",
  },
  {
    code: 1189,
    day: "Moderate rain",
    night: "Moderate rain",
    icon: 302,
    summary: "Rain",
  },
  {
    code: 1192,
    day: "Heavy rain at times",
    night: "Heavy rain at times",
    icon: 305,
    summary: "Heavy Rain",
  },
  {
    code: 1195,
    day: "Heavy rain",
    night: "Heavy rain",
    icon: 308,
    summary: "Heavy Rain",
  },
  {
    code: 1198,
    day: "Light freezing rain",
    night: "Light freezing rain",
    icon: 311,
    summary: "Light Rain",
  },
  {
    code: 1201,
    day: "Moderate or heavy freezing rain",
    night: "Moderate or heavy freezing rain",
    icon: 314,
    summary: "Rain",
  },
  {
    code: 1204,
    day: "Light sleet",
    night: "Light sleet",
    icon: 317,
    summary: "Light Sleet",
  },
  {
    code: 1207,
    day: "Moderate or heavy sleet",
    night: "Moderate or heavy sleet",
    icon: 320,
    summary: "Sleet",
  },
  {
    code: 1210,
    day: "Patchy light snow",
    night: "Patchy light snow",
    icon: 323,
    summary: "Light Snow",
  },
  {
    code: 1213,
    day: "Light snow",
    night: "Light snow",
    icon: 326,
    summary: "Light Snow",
  },
  {
    code: 1216,
    day: "Patchy moderate snow",
    night: "Patchy moderate snow",
    icon: 329,
    summary: "Snow",
  },
  {
    code: 1219,
    day: "Moderate snow",
    night: "Moderate snow",
    icon: 332,
    summary: "Snow",
  },
  {
    code: 1222,
    day: "Patchy heavy snow",
    night: "Patchy heavy snow",
    icon: 335,
    summary: "Heavy Snow",
  },
  {
    code: 1225,
    day: "Heavy snow",
    night: "Heavy snow",
    icon: 338,
    summary: "Heavy Snow",
  },
  {
    code: 1237,
    day: "Ice pellets",
    night: "Ice pellets",
    icon: 350,
    summary: "Hail",
  },
  {
    code: 1240,
    day: "Light rain shower",
    night: "Light rain shower",
    icon: 353,
    summary: "Light Rain",
  },
  {
    code: 1243,
    day: "Moderate or heavy rain shower",
    night: "Moderate or heavy rain shower",
    icon: 356,
    summary: "Rain",
  },
  {
    code: 1246,
    day: "Torrential rain shower",
    night: "Torrential rain shower",
    icon: 359,
    summary: "Heavy Rain",
  },
  {
    code: 1249,
    day: "Light sleet showers",
    night: "Light sleet showers",
    icon: 362,
    summary: "Light Sleet",
  },
  {
    code: 1252,
    day: "Moderate or heavy sleet showers",
    night: "Moderate or heavy sleet showers",
    icon: 365,
    summary: "Sleet",
  },
  {
    code: 1255,
    day: "Light snow showers",
    night: "Light snow showers",
    icon: 368,
    summary: "Light Snow",
  },
  {
    code: 1258,
    day: "Moderate or heavy snow showers",
    night: "Moderate or heavy snow showers",
    icon: 371,
    summary: "Snow",
  },
  {
    code: 1261,
    day: "Light showers of ice pellets",
    night: "Light showers of ice pellets",
    icon: 374,
    summary: "Light Hail",
  },
  {
    code: 1264,
    day: "Moderate or heavy showers of ice pellets",
    night: "Moderate or heavy showers of ice pellets",
    icon: 377,
    summary: "Hail",
  },
  {
    code: 1273,
    day: "Patchy light rain with thunder",
    night: "Patchy light rain with thunder",
    icon: 386,
    summary: "Light Rain Thunder",
  },
  {
    code: 1276,
    day: "Moderate or heavy rain with thunder",
    night: "Moderate or heavy rain with thunder",
    icon: 389,
    summary: "Rain Thunder",
  },
  {
    code: 1279,
    day: "Patchy light snow with thunder",
    night: "Patchy light snow with thunder",
    icon: 392,
    summary: "Light Snow Thunder",
  },
  {
    code: 1282,
    day: "Moderate or heavy snow with thunder",
    night: "Moderate or heavy snow with thunder",
    icon: 395,
    summary: "Snow Thunder",
  },
];

export default conditions;