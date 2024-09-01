import React, { useState } from 'react'
import './SlideBar.css'
import {assets} from "../../assets/assets"


const SlideBar = () => {

  const [extended, setExtended] = useState(false)

  return (
    <div className='slidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="" onClick={() => setExtended(prev=>!prev  )} />
            <div className="newChat">
              <img src={assets.plus_icon} alt="" />
              {extended?<p className="new_Chat">New chat</p>:null}
            </div>
            {extended
            ?<div className="recent">
              <p className="recent_title">Recent</p>
              <div className="recent_entry">
                <img src={assets.message_icon} alt="" />
                {extended?<p>what is react ...</p>:null}
              </div>
            </div>:null}
        </div>
        <div className="bottom">
            <div className="bottom_item recent_entry">
              <img src={assets.question_icon} alt="" />
              {extended?<p>Help</p>:null}
            </div>
            <div className="bottom_item recent_entry">
              <img src={assets.history_icon} alt="" />
              {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom_item recent_entry">
              <img src={assets.setting_icon} alt="" />
              {extended?<p>Settings</p>:null}
            </div>
        </div>

        
    </div>
  )
}

export default SlideBar
