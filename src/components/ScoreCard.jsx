import React from 'react'

const ScoreCard = ({type}) => {
  return (
    <div className='score-card'>
      <p>{type}</p>
      <div className='score-card_div'>
        <p>A. Markram <span> 100* (67)</span></p>
        <p>R. Tripathi<span> 45 (67)</span></p>
      </div>
    </div>
  )
}

export default ScoreCard