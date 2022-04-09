import ImgSaction from "./Components/ImgSaction";
import InputSation from "./Components/InputSation";
import "./Styles/App.css";
import {useState} from 'react';
function App() {
  const [location, setLocation] = useState("london")
  return (
    <div className="App">

      <ImgSaction l={location}/>
      <InputSation l={location} setl={setLocation}/>      
    
    </div>
  );
}

export default App;
