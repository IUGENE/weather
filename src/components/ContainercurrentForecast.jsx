import styles from "./Container.module.css"

const ContainercurrentForecast = ({ current = { temp_c: 28 }, hours = [] }) => {
  // Get current hour
  const currentHour = new Date().getHours()

  // Filter hours to show only future hours (next 6 hours)
  const futureHours = hours
    .filter((hour) => {
      const hourTime = new Date(hour.time).getHours()
      return hourTime > currentHour
    })
    .slice(0, 6)

  return (
    <div className={styles.currentForecast}>
      <p>HOURLY FORECAST</p>
      <hr />
      <div className={styles.hourlyForecast}>
        <div className={styles.hourNow}>
          <p>NOW</p>
          <h5>{Math.floor(current.temp_c)}°C</h5>
        </div>
        {futureHours.map((hour, index) => {
          const hourTime = new Date(hour.time).getHours()
          return (
            <div className={styles.hours} key={index}>
              <p>{hourTime}:00</p>
              <h5>{Math.floor(hour.temp_c)}°C</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ContainercurrentForecast
