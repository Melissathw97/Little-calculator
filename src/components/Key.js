import React from 'react'
import '../App.css'

const Key = ({ data, performCalculation }) => {
  return (
    <div
      className="key"
    >
      <button
        className="button"
        style={{
          backgroundColor: data.color,
        }}
        onClick={() => performCalculation(data.value)}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "1.8em",
          }}
        >
          {data.value}
        </h2>
      </button>

    </div>
  )
}

export default Key
