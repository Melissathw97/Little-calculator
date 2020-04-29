import React from 'react'

const CalculatorDisplay = ({ result }) => {
  return (
    <div
      style={{
        width: "370px",
        backgroundColor: "lightgray",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        boxShadow: "8px 1px gray, 10px 3px gray, 12px 3px gray, 15px 5px gray, 20px 10px gray",
      }}
    >
      <div style={{ padding: "5px 50px" }}>
        <h1
          style={{
            textAlign: "right",
            fontSize: "2.3em"
          }}
        >
          {result == "" ? "0" : result}
        </h1>
      </div>
    </div>
  )
}

export default CalculatorDisplay
