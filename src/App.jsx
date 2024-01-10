import styles from './App.module.css'
import Tabs from './Tabs'



function App() {
 

  return (
    <div className={`${styles.containerApp}`}>
     <h3 className='text-center text-white'>Calculate BMR For your Body</h3>
     <Tabs/>
    </div>
  )
}

export default App
