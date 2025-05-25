import React from 'react'
import FirstContainer from './FirstContainer'
import SecondContainer from './SecondContainer'

const MiddleContainer = () => {
  return (
    <div style={{ backgroundColor: '#FAF5E5' }}> {/* Same beige background as FirstContainer */}
      <FirstContainer />
      <SecondContainer />
    </div>
  )
}

export default MiddleContainer
