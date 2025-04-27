import React from 'react'
import teamImage from "../assets/images/team.png"
import shereIcon from "../assets/icons/share_black.svg"
const NewsCard = () => {
  return (
    <div className='news-card'>
      <div className='news-card_inner'>
        <div className='news-card_image'>
          <img src={teamImage} alt="team" />
        </div>
        <div className='news-card_info'>
          <p>Royal Challengers Bangalore got back to winning ways, after the defeat against Chennai Super Kings,</p>
          <div className='news-card_shere'>
            <span>News</span>
            <img src={shereIcon} alt="shere" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard