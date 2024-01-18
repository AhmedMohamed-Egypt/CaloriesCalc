import styles from "./App.module.css";
import { CaloriesProvider } from "./CaloriesContext";
import Tabs from "./Tabs";
import './store'
function App() {
  return (
    <CaloriesProvider>
      <div className={`${styles.containerApp}`}>
        <h3 className="text-center text-white">Calculate BMR For your Body</h3>
        <Tabs />
      </div>
    </CaloriesProvider>
  );
}

export default App;
