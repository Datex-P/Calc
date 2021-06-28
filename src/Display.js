import React, {useContext} from 'react'
import { Context } from './Context'



function Display() {
  const {displayValue} = useContext(Context)
  return (
    <div className='display'>
      {displayValue}
    </div>
  )
}

export default Display
