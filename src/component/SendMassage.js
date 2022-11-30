import React , {useState} from 'react'
import {auth , db} from './firebase'
import {doc,collection , serverTimestamp, addDoc } from 'firebase/firestore';


const styles = {
    form:`h-12 w-full max-w-[728px] flex text-xl absolute bottom-0 `,
    input: `w-full text-xl p-3  bg-gray-300 text-white outline-none border-none text-gray-700/100 `,
    button: ' bg-gray-300 w-[20%] p-2 border-left-2  border-black ',
   
  }


function SendMassage({scroll}) {
    const [input, setInput] = useState('')

      const sendMessage = async (e) => {
      e.preventDefault();
      if(input === '' ){
        return
      }
      const {uid, displayName} = auth.currentUser;
      console.log(uid,displayName)

      await addDoc(collection(db,'messages'), {
        text:input,
        name:displayName,
        uid,
        timestamp:serverTimestamp()
      })
      setInput('')
      scroll.current.scrollIntoView({behavior: 'smooth'})
    }


  return (
    <>
        <form onSubmit={(e) => {sendMessage(e)}} className={styles.form}>
            <input 
            placeholder='type something...' 
            className={styles.input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            value={input}
            />
    
            <button className={styles.button} type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2 float-right ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>

            </button>
        </form>
    </>
  )
}

export default SendMassage