
import ColorName from "./ColorName";
import ColorBox from "./ColorBox";
import { useState } from "react";

function App() {

  const [colorValue , setColorValue] = useState('');
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
       <ColorBox colorValue= {colorValue} />
       <ColorName 
         colorValue={colorValue}
         setColorValue={setColorValue}
       />

    </div>
  );
}

export default App;
