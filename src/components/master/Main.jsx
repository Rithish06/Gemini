import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../context/context'

const Dummy = () => {

    const {prevPrompts,setPrevPrompts,onSent,setRecentPrompt,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main_container">
            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, Rithish</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest me good images</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest me good songs</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest me good movies</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest me good language</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
                
            </>
            :
                <div className="result">
                    <div className="result_title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result_data">
                        <img src={assets.gemini_icon} alt="" />
                        <p dangerouslySetInnerHTML={{__html : resultData}}></p>
                    </div>
                </div>}
            
            <div className="main_bottom">
            <div className="search_box">
                <input className='searbox' type="text" placeholder='enter prompt here' onChange = {(e) => setInput(e.target.value)} value={input} />
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
            </div>
            <p className="bottom_info">
                gemini may display inaccurate info.
            </p>
        </div>
        </div>
        
        
    </div>
  )
}

export default Dummy
