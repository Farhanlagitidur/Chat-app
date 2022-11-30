import Sign from './component/Sign'
import Navbar from './component/navbar'
import Chat from './component/chat'
import {auth} from './component/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const styles = {
  container:'max-w-[728px] mx-auto text-center ',
  sectionContainer: `flex flex-col h-[100vh] bg-gray-300  shadow-xl border `,
}

function App() {
  const[users] = useAuthState(auth)


  return (
    <div className={styles.container}>
      <section className={styles.sectionContainer}>
      {users? <Chat /> : <Sign/>} 
      </section>
   
     
    </div> 
  );
}

export default App;
