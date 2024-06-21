import React, { memo } from 'react'

const Call3 = ({label,action}) => {

  console.log("Call3 component ");
  return (
    <div>

    </div>
  )
}

// Memo function adding , this function will verify each and every is there changed or not in the component , suppose changed in component memo function is work , suppose not changed memo function stoped 

export default memo(Call3)