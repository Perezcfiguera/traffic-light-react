import { useState } from "react";

export function Semaforo() {
  const [activeLight, setActiveLight] = useState("");
  const [intervalo, setIntervalo] = useState(null)
 

 
  function randomColor() {
   let pepo = setInterval(() => {
      const colores = ["green", "yellow", "red"];

      let randomColor = colores[Math.floor(Math.random() * colores.length)];

      setActiveLight(randomColor);
    }, 2000);
    setIntervalo(pepo)
  }

   function stopColor (){
    clearInterval(intervalo)


  }

  return (

    <div className="semaforo">
      <div
        className={`light red ${activeLight === "red" ? "active" : ""}`}
        onClick={() => setActiveLight("red")}
      />
      <div
        className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}
        onClick={() => setActiveLight("yellow")}
      />
      <div
        className={`light green ${activeLight === "green" ? "active" : ""}`}
        onClick={() => setActiveLight("green")}
      />
      <button onClick={randomColor} type="button" class="btn btn-success">
        start
      </button>
      <button onClick={stopColor} type="button" class="btn btn-danger">
        stop
      </button>
    </div>
  );
}
