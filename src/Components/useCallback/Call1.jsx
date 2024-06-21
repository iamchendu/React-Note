import React, { memo } from 'react'

const Call1 = ({label,value}) => {
    console.log(label);
  return (
    <div>
        <h4>{label} : {value} </h4>
        
    </div>
  )
}

export default memo(Call1)