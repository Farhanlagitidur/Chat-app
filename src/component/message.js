import React from 'react'
import {auth} from './firebase'
 
// const styles = {
//   message: `flex items-center shadow-xl m-2 py-2 px-3 h-auto rounded-tl-2xl rounded-tr-2xl`,
//   name: `absolute mt-[-4rem] text-gray-600 text-xs `,
//   timestamp: 'text-gray-400  w-[50px]  break-all float-right text-center text-gray-600 text-xs ',
//   text: 'p-2   break-all text-left'
// }

const styles2 = {
  sent: `bg-[#395dff] text-white flex-row-reverse float-right bg-[#128C7E]  text-left  rounded-tr-none `,
  received: `bg-gray-400 text-white float-left rounded-tl-none text-right  `,
}

const Message = ({message, timestamp}) => {


  const messageClass2 =  message.uid === auth.currentUser.uid ? 
   `${styles2.sent}` : `${styles2.received}`;

     let newDate =   new Date(timestamp * 1000);
     let Hours = newDate.getHours();
     let Minutes = newDate.getMinutes()

    //  console.log(message.uid)
    //  console.log("ini auth" ,auth.currentUser.id)
    //  console.log(auth)
     
  return (
    <div className=" mb-2">
          <div className={`rounded py-2 px-3  break-all shadow-xl  ${messageClass2} `}>
                {/* <p className="text-sm text-teal">
                    {message.name}
                  </p> */}
                  <p className="text-sm mt-1 ">
                  {message.text}
                    </p>
                <p className="text-right text-xs text-gray-300 mt-2 ">
                { `${Hours} : ${Minutes}`}
                </p>
          </div>
   </div>

  )
}

export default Message
