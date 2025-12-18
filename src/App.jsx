
import { BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import Home from "./include/home";
import About from "./include/about";
import Contact from "./include/contact";
import NavBar from "./include/NavBar";
import Login from "./include/login";
import Registration from "./include/registration";

import './App.css'

const App=()=>{
  return(
    <div>

    <Router>

       <NavBar />
       <Routes>

        <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
            <Route path="/Registration" element={<Registration />} />
            
        </Routes>    
    </Router>  
    </div>
  )
}
export default App;