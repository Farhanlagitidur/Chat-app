import React from 'react';
import {useState,useEffect,useRef} from 'react';
import Navbar from './navbar'
import { db } from './firebase';
import Message from './message'
import SendMassage from './SendMassage'
import {query , collection, orderBy , onSnapshot} from 'firebase/firestore'



const styles = {
  container: 'flex flex-col p-[10px] bg-gray-500 mb-10 max-w-[728px]  overflow-auto  scrollbar-hide '
}

function Chat() {
  const [messages, setMessages] = useState([])
  const scroll = useRef()

  useEffect(() => {
    const  q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id})
      });
      setMessages(messages)

    });
    return () => unsubscribe();
    
  },[])



  return (
    <>
      <Navbar/>
     <main className={styles.container}>
    
      { messages && 
        messages.map((message) => (
          <Message key={message.id} message={message} timestamp ={message.timestamp?.seconds}/>
      ))}
       <span ref={scroll} ></span>
     </main>
    
     <SendMassage scroll={scroll}/>
     
   
    </>
   
    
  )
}

export default Chat