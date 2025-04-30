import styles from "./Container.module.css"

const ContainerweekForecast = ({ days = [] }) => {
  // Get day names
  const getDayName = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { weekday: "long" })
  }

  // Format date as day/month
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return `${date.getDate()}/${date.getMonth() + 1}`
  }

  return (
    <div className={styles.weekForecast}>
      <p>10-DAY FORECAST</p>
      <hr />
      <div className={styles.weekDays}>
        <div className={styles.currentDate}>
          <p>Today</p>
          <p>{formatDate(days[0]?.date || new Date())}</p>
          <h5>{Math.floor(days[0]?.day.avgtemp_c)  || 28}°C</h5>
        </div>
        {days.slice(1).map((day, index) => (
          <div className={styles.date} key={index}>
            <p>{getDayName(day.date)}</p>
            <p>{formatDate(day.date)}</p>
            <h5>{Math.floor(day.day.avgtemp_c)}°C</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContainerweekForecast
