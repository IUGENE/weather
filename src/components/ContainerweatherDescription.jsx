import styles from "./Container.module.css"

const ContainerweatherDescription = ({
  feelsLike = 30,
  humidity = 82,
  visibility = 6,
  precip = 2.3,
  forecast = { day: { totalprecip_mm: 2 } },
}) => {
  return (
    <div className={styles.weatherDescription}>
      <div className={styles.box}>
        <h5>FEELS LIKE</h5>
        <h4>{feelsLike}°C</h4>
        <p>{humidity > 70 ? "Humidity is making it feel warmer" : "Similar to the actual temperature"}</p>
      </div>
      <div className={styles.box}>
        <h5>Precipitation</h5>
        <h4>{precip}mm</h4>
        <p>
         
          {forecast.day.totalprecip_mm}mm expected in next 24hr
        </p>
      </div>
      <div className={styles.box}>
        <h5>Visibility</h5>
        <h4>{visibility} km</h4>
      </div>
      <div className={styles.box}>
        <h5>Humidity</h5>
        <h4>{humidity}%</h4>
        <p>The dew point is {Math.round(feelsLike - (100 - humidity) / 5)}° right now</p>
      </div>
    </div>
  )
}

export default ContainerweatherDescription
