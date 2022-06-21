import React from 'react'
import Man from '../man.png'
import Man2 from '../man2.png'

const Message = (props) => {

    const Timestamp=()=>{
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        return(
            <div className="timestamp text-gray-400 text-sm p-1">{time}</div>
        );
      }

  return (
    <div className='flex content-start rounded items-start w-[95%] m-2'>
        <div className="avatar basis-[1/10] min-w-[64px]">
               <img src={ props.avatar ==2? Man2:Man } alt='' width='80%'/>
            </div>
        <div className="content flex flex-col">
            <div className="sender flex">
                <div className="username text-gray-600 pr-2">{props.sender}</div>
                <Timestamp/>
            </div>
            <div className="message pb-2 whitespace-pre-line">
                {props.text}
            </div>
        </div>
    </div>
  )
}

export default Message