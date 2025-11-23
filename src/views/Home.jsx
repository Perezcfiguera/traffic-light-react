
import { Navbar } from "../components/Navbar.jsx";
import { Semaforo}  from "../components/Semaforo.jsx";


const Home = () => {

  return (
    <>
    <Navbar/>
    <div className=" col d-flex justify-content-center align-items-center">
    < Semaforo/>
    </div>
    </>
  )
}

export default Home;
