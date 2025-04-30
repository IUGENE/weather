"use client"

import { useState, useEffect } from "react"
import styles from "./Container.module.css"

const RainbowSlider = ({ initialValue = 50 }) => {
  const [value, setValue] = useState(initialValue)
  
  // Add this useEffect to update the slider when initialValue changes
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <div className={styles["slider-container"]}>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className={styles["rainbow-slider"]}
        style={{
          "--progress": `${value}%`, // Dynamic progress width
        }}
        readOnly
      />
    </div>
  )
}

export default RainbowSlider