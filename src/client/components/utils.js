import sunriseAndSunsetData from './sunrise-sunset.json';

export const getMoment = ({ locationName } = {}) => {
  const nowDate = Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(new Date())
    .replace(/\//g, '-');

  const location = sunriseAndSunsetData.find(
    data => data.locationName === locationName,
  );
  if (!location.time) return null;

  return location.time.find(time => time.dataTime === nowDate);
};
