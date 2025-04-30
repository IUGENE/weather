import styles from "./Container.module.css"
import background from "../assets/background.jpg"

const CurrentWeather = ({ temp = 28, condition = "Rainy Day", icon = "" }) => {
  return (
    <>
      <div className={styles.weather}>
        <div className={styles.currentWeatherBackground}>
          {/* <img src={background || "/placeholder.svg"} alt="image" className={styles.weatherBackgroundImage} /> */}
        </div>

        <div className={styles.recentWeather}>
          {icon && <img src={icon || "/placeholder.svg"} alt="weather icon" />}
          <h1 className={styles.heading}>{temp}°C</h1>
          <h4 className={styles.day}>{condition}</h4>
        </div>
      </div>
    </>
  )
}

export default CurrentWeather