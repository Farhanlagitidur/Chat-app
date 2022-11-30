import React from 'react'
import GoogleButton from 'react-google-button'

import {auth} from '../component/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

const styles = {
  container: ' conatiner bg-slate-300 flex justify-center h-screen items-center ',
 
}

function Sign() {
  
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }


  return (
    <div className={styles.container}>
      
     <div className={styles.wrapper}>
       <GoogleButton onClick={signInGoogle}/>
     </div>
    
    </div>
  )
}

export default Sign