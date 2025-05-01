import RainbowSlider from "./Rainbowslider"
import compass from "../assets/compass.png"
import styles from "./Container.module.css"

const ContainerExtraFeatures = ({ uv = 3, wind = 3, windDir = "N" }) => {
  // UV Index descriptions
  const getUVDescription = (uv) => {
    if (uv <= 2) return "Low"
    if (uv <= 5) return "Moderate"
    if (uv <= 7) return "High"
    if (uv <= 10) return "Very High"
    return "Extreme"
  }

  // Calculate UV slider value (0-100) - ensure it's a number
  const uvSliderValue = Math.min(parseFloat(uv) * 10, 100)

  return (
    <>
      <div className={styles.features1}>
        <p>UV INDEX</p>
        <hr />
        <h4>{uv}</h4>
        <p>{getUVDescription(uv)}</p>
        {/* Key prop forces re-render when uv changes */}
        <RainbowSlider key={`uv-${uv}`} initialValue={uvSliderValue} />
      </div>
      <div className={styles.features2}>
        <div className={styles.wind}>
          <p>WIND</p>
          <hr />
          <h4>{wind}</h4>
          <p>MPH</p>
          <p>dir : {windDir} </p>
        </div>
        <div className={styles.compass}>
          <img src={compass || "/placeholder.svg"} alt="image" className={styles.compassImage} />
        </div>
      </div>
    </>
  )
}

export default ContainerExtraFeatures