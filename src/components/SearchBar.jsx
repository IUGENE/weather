"use client"

import { useState } from "react"
import styles from "./Container.module.css"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const q = e.target.value
      onSearch(q)
      setQuery("")
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search your city:"
        className={styles.searchBar}
        onKeyDown={handleSearch}
        onChange={handleChange}
        value={query}
      />
    </div>
  )
}

export default SearchBar
