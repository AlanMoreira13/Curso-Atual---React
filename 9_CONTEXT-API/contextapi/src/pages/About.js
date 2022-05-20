// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

import "./About.css";

const About = () => {
  const { color } = useTitleColorContext();
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <div>
      <h1 style={{ color: color }}>Página Sobre</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
