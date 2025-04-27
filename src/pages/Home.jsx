import React from 'react'
import ballIcon from "../assets/icons/ball.svg";
import matchLogo from "../assets/icons/match_logo.svg";
import stadiumIcon from "../assets/icons/stadium_icon.svg";
import ScoreCard from '../components/ScoreCard';
import LastUpdateCard from '../components/LastUpdateCard';
import NewsCard from '../components/NewsCard';
const Home = () => {
  return (
    <>
        <section className='container'>
            <div className='section1_main'>
              <h1><img src={ballIcon} alt="ball" />Match 4, SUNRISERS HYDERABAD VS RAJASTHAN ROYALS</h1>
              <p className='start_time'>APR 02, 2023  | 7:30 pm IST</p>
              <div className='live-badge-wrapper'>
              <div className="live-badge">
                <span className="dot"></span>
                Live
              </div>
              </div>
            <div className='teams_score'>
              <div className='team_info'>
                <div className='team_logo active'>
                  <img src={matchLogo} alt="match-logo" />
                </div>
                <div>
                  <p className='team_score'>108/2 <span>(20)</span></p>
                  <p className='player_score'>14/1 <span>(1.0)</span></p>
                  <p className='player_score active'>15/0 <span>(0.5)</span></p>
                </div>
              </div>
              <div className='vs_div'>
                  <p>vs</p>
              </div>
              <div className='team_info'>
                <div className='team_two'>
                  <p className='team_score'><span>(20) </span>108/2 </p>
                  <p className='player_score'><span>(1.0) </span>14/1 </p>
                  <p className='player_score'><span>(0.5) </span>15/0 </p>
                </div>
                <div className='team_logo'>
                  <img src={matchLogo} alt="match-logo" />
                </div>
              </div>
            </div>
            <div className='need_run_info'>
              <p>Sunrisers Hyderabad needs 30 runs from 11 balls to win</p>
            </div>
            <div className='match_venue'>
              <p><img src={stadiumIcon} alt="stadium-icon" />Rajiv Gandhi International Stadium, Hyderabad</p>
            </div>
            <div className='scorecard_main'>
              <ScoreCard type="Batters"/>
              <ScoreCard type="bowlers" />
            </div>
            </div>
        </section>
        <section>
          <div className='latest_update_main'>
            <div className='latest_update_head'>
              <h2>LATEST UPDATES</h2>
              <a href="#">See More</a>
            </div>
            <div className='last_update_preview'>
              <LastUpdateCard/>
              <LastUpdateCard/>
            </div>
            <div className='news_preview'>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
            </div>
          </div>
        </section>
    </>
  )
}

export default Home