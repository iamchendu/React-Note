import React, { memo } from 'react'

const Call2 = ({label,action}) => {
    console.log(label+"Button Component ");
  return (
    <div>
        <button onClick={action}>{label}</button>
    </div>
  )
}

export default memo(Call2)