import React from 'react';
import useKeys from '../utils/useKeys';
import Key from '../components/Key'

const KeyPad = ({ performCalculation }) => {
  const keys = useKeys();

  return (
    <div style={{
      width: "330px",
      padding: "20px 20px",
      backgroundColor: "#dbdee0",
      borderBottomRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      boxShadow: "20px 5px gray, 10px 7px gray, 1px 2px gray, 2px 10px gray, 5px 20px gray, 8px 25px gray, 20px 25px gray"
    }}>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {keys.map((key) => {
          return <Key data={key} performCalculation={performCalculation} />
        })}
      </div>
    </div >
  )
}

export default KeyPad
