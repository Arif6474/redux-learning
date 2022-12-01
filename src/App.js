
import { createContext, useState } from 'react';
import './App.css';
import Parents from './components/Parents';
import ShortForm from './ShortForm';
export const COUNTER_CONTEXT = createContext();
function App() {
  const [count, setCount] = useState(0);
  const value = {count, setCount};
  return (
    <COUNTER_CONTEXT.Provider value={value}  >
      <div>
     <Parents/>
     {/* <ShortForm/> */}
    </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
