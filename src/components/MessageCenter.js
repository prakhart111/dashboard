import React from 'react'
import Message from './Message'



const MessageCenter = () => {

  const [chats,updateChats] = React.useState(
    [
      {
        avatar:1,
        sender:"Prakhar",
        text:"Hola ! Here's the assignment, hope I'm on time and you like it. \n No 3rd party packages were used for any functionality. "+
        "\n\n MesageBox and drag to upload are functional as well.",
      },
    ]
  )
  const Data = ()=>{
    let message = ""
    return message
  }
  const getText=(event)=>{
    Data.message = event.target.value;
  }
  
  const sendMessage = () =>{
    const mess = {
      avatar:2,
      sender:"Edutribe",
      text:`${Data.message}`,
    };
    if(mess.text==='undefined'){
      return;
    }
    updateChats([...chats,mess])
    document.getElementById('inputBox').value=null
  }

  
  
  return (
    <div className='container bg-white rounded-md shadow'>
        <div className="container overflow-auto overscroll-contain  min-w-6/7 min-h-[400px] max-h-[500px] flex flex-col items-center mb-5">
        <button className='border-2 max-w-fit border-gray-300 bg-white shadow-lg p-2 m-2 rounded-lg text-sm text-gray-600 font-semibold'>Load Conversations</button>
            
        {/* <Message 
          sender={chats[0].sender}
          time={chats[0].time}
          text={chats[0].text}
        /> */}
        {chats.map((item)=>{
          return(
            <Message 
            avatar={item.avatar}
          sender={item.sender}
          text={item.text}
          key={Math.random()}
        />
          )
        })}

        </div>
        <div className="input-cont flex justify-evenly p-2">
          <Plus className='basis-1/12 mt-2'/>
          <Emoji className='basis-1/12 mt-2'/>
          <input onChange={getText} id='inputBox' type="text" placeholder="Message" className='p-3 grow rounded-lg bg-gray-100'/>
          <button onClick={sendMessage} className='bg-[#2A85FF] ml-2 basis-[14.2857143%] rounded text-white text-sm'>Send</button>
        </div>
    </div>
  )
}




const Emoji = ({className})=>{
  return(<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#6F767E"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M7.01567 13.0837C7.52176 12.8625 8.11127 13.0935 8.33239 13.5996C8.95055 15.0145 10.3613 16 12 16C13.6387 16 15.0494 15.0145 15.6676 13.5996C15.8887 13.0935 16.4782 12.8625 16.9843 13.0837C17.4904 13.3048 17.7214 13.8943 17.5003 14.4004C16.5754 16.5174 14.4619 18 12 18C9.53806 18 7.42464 16.5174 6.49969 14.4004C6.27857 13.8943 6.50958 13.3048 7.01567 13.0837Z" fill="#6F767E"/>
  <path d="M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z" fill="#6F767E"/>
  <path d="M17 9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9Z" fill="#6F767E"/>
  </svg>
  )
}
const Plus = ({className})=>{
  return(<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21 19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H16L16.0107 2.01071C16.7136 2.07025 17.3761 2.3761 17.8787 2.87868L20.1213 5.12132C20.6239 5.6239 20.9297 6.28645 20.9893 6.98929L21 7V19ZM18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44771 4 6 4H15V6C15 7.10457 15.8954 8 17 8H19V19C19 19.5523 18.5523 20 18 20Z" fill="#6F767E"/>
  <path d="M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10L11 12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H11L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13L13 10Z" fill="#6F767E"/>
  </svg>
  )
}

export default MessageCenter