import { useEffect, useState } from "react";
import HookUseReducer from "./HookUseReducer";

const HookUseEffect = () => {
  // 1 - useEffect sem dependências

  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de dependências vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  // 3 - item no array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando anotherNumber muda!");
    }
  }, [anotherNumber]);

  // 4 - cleanup do useEffect
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Olá mundo");
    //   setAnotherNumber(anotherNumber + 1);
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 5)}>
        Mudar AnotherNumber
      </button>
    </div>
  );
};

export default HookUseEffect;
