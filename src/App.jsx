import { useEffect, useState, useRef } from 'react'
import gptLogo from './images/chatgpt.svg'
import addBtn from './images/add-30.png'
import msgIcon from './images/message.svg'
import home from './images/home.svg'
import saved from './images/bookmark.svg'
import rocket from './images/rocket.svg'
import send from './images/send.svg'
import user from './images/user-icon.png'
import logo from './images/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai'

import './App.css'

function App() {
  const msgEnd = useRef(null);

  const [input, setInput]=useState("");
  const [messages, setMessages ]=useState([
    {
    Text: "Hi, I am ChatGPT",
    isBot: true,
  }
]);

useEffect(() =>{
  msgEnd.current.scrollIntoView();
},[messages]);

  const handleSend=async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    const res= await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      {text, isBot: false },
      {text:res, isBot: true }
    ]);
    console.log(res);
  }

  const handleEnter = async (e)=>{
    if(e.key ==='Enter') await handleSend();
  }

  const handleQuery = async (e)=>{
    const text = e.target.value;
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    const res= await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      {text, isBot: false },
      {text:res, isBot: true }
    ]);
  }
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="logo" />ChatGPT</div>
          <button className='midBtn' onClick={()=>{window.location.reload()}}>
            <img src={addBtn} alt="new chat" className='addBtn' />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className='query' onClick={handleQuery} value={"What is Programming ?"}><img src={msgIcon} alt="" /></button>
            <button className='query' onClick={handleQuery} value={"What is an API ?"}><img src={msgIcon} alt="" /></button>
          </div>
          </div>
          <div className="lowerSide">
            <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
            <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
            <div className="listItems"><img src={rocket} alt="" className="listItemsImg"/>Upgrade to Pro</div>
          </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => 
            <div key={i} className={message.isBot?"chat bot":"chat"}>
                <img className='chatImg' src={message.isBot?logo:user} alt="" /><p className="txt">{message.text}</p>
            </div>
          )}
          <div ref={msgEnd}/>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' value={input} onKeyDown={handleEnter} onChange={(e) => {setInput(e.target.value)}} /><button className='send' onClick={handleSend}><img src={send} alt="send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places or facts.ChatGPT August 20 version.</p>
        </div>
      </div>
    </div>
  )
}

export default App
