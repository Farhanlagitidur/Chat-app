import React from 'react'
import Logout from './logout'

const styles = {
    container: 'bg-gray-300 container flex align-center justify-between  mx-auto p-2 ',
    tittle: 'float-left  p-2 font-bold',
}

function Navbar() {
  return (
   <>
    <div className={styles.container}>
        <h1 className={styles.tittle}>Chat App.</h1>
        <Logout />
    </div>
   
  
   </>
  )
}

export default Navbar