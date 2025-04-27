import React, { useEffect, useState } from 'react'
import teamImage from "../assets/images/team.png"
import shereIcon from "../assets/icons/shareIcon.svg"
import shareIconBlack from "../assets/icons/share_black.svg"

const LastUpdateCard = () => {
  const [currentShareIcon, setCurrentShareIcon] = useState(shereIcon);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setCurrentShareIcon(shereIcon);
      } else {
        setCurrentShareIcon(shareIconBlack);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='last_update_main'>
      <img src={teamImage} alt="team" />
      <div className='last_update_overlay'>
        <div className='last_update_info'>
          <p>Royal Challengers Bangalore got back to winning ways, after the defeat against Chennai Super Kings,</p>
          <div className='last_update_shere'>
            <span>News</span>
            <img src={currentShareIcon} alt="shere" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastUpdateCard