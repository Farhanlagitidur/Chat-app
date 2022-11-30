import React from 'react'
import {useState, useEffect} from 'react'
import {auth} from './firebase'
import {formatRelative} from 'date-fns'

const styles = {
  message: `flex items-center shadow-xl m-2 py-2 px-3 h-auto rounded-tl-2xl rounded-tr-2xl`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs `,
  sent: `bg-[#395dff] text-white flex-row-reverse   text-end float-right  rounded-bl-2xl `,
  received:`bg-gray-200 text-black float-left rounded-br-2xl `,
  timestamp: 'text-gray-400  w-[50px]  break-all float-right text-center text-gray-600 text-xs ',
  text: 'p-2   break-all text-left'
}

const styles2 = {
  sent: `bg-[#395dff] text-white flex-row-reverse float-right bg-[#128C7E]  text-left  rounded-tr-none `,
  received: `bg-gray-400 text-white float-left rounded-tl-none text-right  `,
}

const Message = ({message, timestamp}) => {

  const messageClass =  message.uid === auth.currentUser.id ? 
  `${styles.received}` : `${styles.sent}`;

  const messageClass2 =  message.uid === auth.currentUser.id ? 
  `${styles2.received}` : `${styles2.sent}`;

 
//   console.log(message.timestamp.toDate())
//   console.log(message.timestamp.toDate().getHours())
//   console.log(message.timestamp.toDate().getMinutes())

//   let Hours =  message.timestamp.toDate().getHours()
//   let Minutes =  message.timestamp.toDate().getMinutes()
//   let formatedTime = Hours + ':' + Minutes

//  const tai = async () => {
//   let Hours = await message.timestamp.toDate().getHours()
//   let Minutes = await message.timestamp.toDate().getMinutes()
//   let formatedTime = Hours + ':' + Minutes
//  }
 
  // const formatTime = async () => {
    let newDate =   new Date(timestamp* 1000);
     let Hours = newDate.getHours();
     let Minutes = newDate.getMinutes()
  //    const HourComplete = Hours + ':' + Minutes
  //    let formatedTime = HourComplete
  //    console.log(formatedTime)
 
  //   }


  return (
    <div className=" mb-2">
          <div className={`rounded py-2 px-3   break-all shadow-xl  ${messageClass2} `}>
                <p className="text-sm text-teal">
                    
                  </p>
                  <p className="text-sm mt-1 ">
                  {message.text}
                    </p>
                <p className="text-right text-xs text-gray-300 mt-2 ">
                { `${Hours} : ${Minutes}`}
                </p>
          </div>
   </div>

    // <div>
    //   <div className={`${styles.message} ${messageClass}`}>
    //   {timestamp? (
    //       <p className={styles.timestamp}>{ `${Hours} : ${Minutes}`}</p>
    //     ) : null}
    //     <p className={styles.text}>{message.text}
    //     </p>
    //   </div>
     
    // </div>
  )
}

export default Message
