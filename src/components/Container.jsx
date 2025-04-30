import styles from "./Container.module.css"
import CurrentWeather from "./CurrentWeather"
import ContainerweatherDescription from "./ContainerweatherDescription"
import ContainercurrentForecast from "./ContainercurrentForecast"
import ContainerweekForecast from "./ContainerweekForecast"
import ContainerExtraFeatures from "./ContainerExtraFeatures"

const Container = ({ children, weatherData }) => {
  return (
    <div className={styles.container}>
      {children}
      {weatherData && (
        <div className={styles.currentWeatherContainer}>
          <div className={styles.currentState}>
            <CurrentWeather
            temp={Math.floor(weatherData.current.temp_c)}
              condition={weatherData?.location?.name}
              icon={weatherData.current.condition.icon}
            />
            <ContainerweatherDescription
              feelsLike={Math.floor(weatherData.current.feelslike_c)} 
              humidity={weatherData.current.humidity}
              visibility={Math.floor(weatherData.current.vis_km)} 
              precip={weatherData.current.precip_mm}
              forecast={weatherData.forecast.forecastday[0]}
            />
          </div>
          <div className={styles.forecastContainer}>
            <ContainercurrentForecast current={weatherData.current} hours={weatherData.forecast.forecastday[0].hour} />

            <div className={styles.monthForecast}>
              <ContainerweekForecast days={weatherData.forecast.forecastday} />
            </div>
            <div className={styles.extraFeaturs}>
              <ContainerExtraFeatures
                uv={weatherData.current.uv}
                wind={weatherData.current.wind_mph}
                windDir={weatherData.current.wind_dir}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Container
