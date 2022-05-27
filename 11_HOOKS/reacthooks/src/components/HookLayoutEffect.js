import { useLayoutEffect, useEffect, useState } from "react";

const HookLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("Mudou o de nome");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome");
  }, []);

  console.log(name);
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
    </div>
  );
};

export default HookLayoutEffect;
