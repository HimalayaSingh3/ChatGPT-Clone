import { useState } from 'react'
import gptLogo from './images/chatgpt.svg'
import addBtn from './images/add-30.png'
import msgIcon from './images/message.svg'
import home from './images/home.svg'
import saved from './images/bookmark.svg'
import rocket from './images/rocket.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="logo" />ChatGPT</div>
          <button className='midBtn'>
            <img src={addBtn} alt="new chat" className='addBtn' />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className='query'><img src={msgIcon} alt="" />What is Programming ?</button>
            <button className='query'><img src={msgIcon} alt="" />What is Programming ?</button>
          </div>
          </div>
          <div className="lowerSide">
            <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
            <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
            <div className="listItems"><img src={rocket} alt="" className="listItemsImg"/>Upgrade to Pro</div>
          </div>
      </div>
    </div>
  )
}

export default App
