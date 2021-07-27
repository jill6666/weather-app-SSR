import React, { useState, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';

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

export const weatherIcons = {
  day: {
    isThunderstorm: <img src='../../images/day-thunderstorm.svg' alt='thunderstorm' />,
    isClear: <img src='../../images/day-clear.svg' alt='clear' />,
    isCloudyFog: <img src='../../images/day-cloudy-fog.svg' alt='cloudy-fog' />,
    isCloudy: <img src='../../images/day-cloudy.svg' alt='cloudy' />,
    isFog: <img src='../../images/day-fog.svg' alt='fog' />,
    isPartiallyClearWithRain: <img src='../../images/day-partially-clear-with-rain' alt='rain' />,
    isSnowing: <img src='../../images/day-snowing.svg' alt='snowing' />,
  },
  night: {
    isThunderstorm: <img src='../../images/night-thunderstorm.svg' alt='thunderstorm' />,
    isClear: <img src='../../images/night-clear.svg' alt='clear' />,
    isCloudyFog: <img src='../../images/night-cloudy-fog.svg' alt='cloudy-fog' />,
    isCloudy: <img src='../../images/night-cloudy.svg' alt='cloudy' />,
    isFog: <img src='../../images/night-fog.svg' alt='fog' />,
    isPartiallyClearWithRain: <img src='../../images/night-partially-clear-with-rain' alt='rain' />,
    isSnowing: <img src='../../images/night-snowing.svg' alt='snowing' />,
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
