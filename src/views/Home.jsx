// This is you home view, which is being render on main.jsx

import { Navbar } from "../components/Navbar.jsx";
import { Palito } from "../components/Palito.jsx";
import { Rectangulo } from "../components/Rectangulo.jsx";

const Home = () => {

  return (
    <>
    <Navbar/>
    <div className=" justify-content-center align-items-center"> 
      <Palito /> 
     <Rectangulo /> 
    </div>
   
    
    
     
    </>
  )
}

export default Home;
