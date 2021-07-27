import React, { useState, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import DayThunderstorm from '../../../public/images/day-thunderstorm.svg';
import DayClear from '../../../public/images/day-clear.svg';
import DayCloudyFog from '../../../public/images/day-cloudy-fog.svg';
import DayCloudy from '../../../public/images/day-cloudy.svg';
import DayFog from '../../../public/images/day-fog.svg';
import DayPartiallyClearWithRain from '../../../public/images/day-partially-clear-with-rain.svg';
import DaySnowing from '../../../public/images/day-snowing.svg';
import NightThunderstorm from '../../../public/images/night-thunderstorm.svg';
import NightClear from '../../../public/images/night-clear.svg';
import NightCloudyFog from '../../../public/images/night-cloudy-fog.svg';
import NightCloudy from '../../../public/images/night-cloudy.svg';
import NightFog from '../../../public/images/night-fog.svg';
import NightPartiallyClearWithRain from '../../../public/images/night-partially-clear-with-rain.svg';
import NightSnowing from '../../../public/images/night-snowing.svg';

const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isClear: [1],
  isCloudyFog: [25, 26, 27, 28],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isPartiallyClearWithRain: [
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    19,
    20,
    29,
    30,
    31,
    32,
    38,
    39,
  ],
  isSnowing: [23, 37, 42],
};

const weatherIcons = {
  day: {
    isThunderstorm: <img src='images/day-thunderstorm.svg' alt='' />,
    isClear: <img src='images/day-clear.svg' alt='' />,
    isCloudyFog: <img src='images/day-cloudy-fog.svg' alt='' />,
    isCloudy: <img src='images/day-cloudy.svg' alt='' />,
    isFog: <img src='images/day-fog.svg' alt='' />,
    isPartiallyClearWithRain: <img src='images/day-partially-clear-with-rain.svg' alt='' />,
    isSnowing: <img src='images/day-snowing.svg' alt='' />,
  },
  night: {
    isThunderstorm: <img src='images/night-thunderstorm.svg' alt='' />,
    isClear: <img src='images/night-clear.svg' alt='' />,
    isCloudyFog: <img src='images/night-cloudy-fog.svg' alt='' />,
    isCloudy: <img src='images/night-cloudy.svg' alt='' />,
    isFog: <img src='images/night-fog.svg' alt='' />,
    isPartiallyClearWithRain: <img src='images/night-partially-clear-with-rain.svg' alt='' />,
    isSnowing: <img src='images/night-snowing.svg' alt='' />,
  },
};

const IconContainer = styled.div`
  flex-basis: 30%;

  svg {
    max-height: 110px;
  }
`;

const weatherCode2Type = weatherCode =>
  Object.entries(weatherTypes).reduce(
    (currentWeatherType, [weatherType, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
        ? weatherType
        : currentWeatherType,
    '',
  );

const WeatherIcon = ({ currentWeatherCode, moment }) => {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState('isClear');

  const theWeatherIcon = useMemo(() => weatherCode2Type(currentWeatherCode), [
    currentWeatherCode,
  ]);

  useEffect(() => {
    setCurrentWeatherIcon(theWeatherIcon);
  }, [theWeatherIcon]);

  return (
    <IconContainer>{weatherIcons[moment][currentWeatherIcon]}</IconContainer>
  );
};

export default WeatherIcon;
