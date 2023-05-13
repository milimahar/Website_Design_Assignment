
// import './App.css';


import  WeDo  from './Components/WeDo';
import { Contact } from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  AiPage from './AiPage'


function App() {
  return (
    <div className="App">
     {/* <WeDo/> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeDo />}/>
       
          <Route path="contact" element={<Contact/>} />
         <Route path='aipage' element={< AiPage  />}/>
        
         
       
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
