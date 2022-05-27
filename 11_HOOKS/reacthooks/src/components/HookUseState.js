import React, { useState } from "react";

const HookUseState = () => {
  // 1 - usestate
  let userName = "João";

  const [name, setName] = useState("Alan");

  const changeNames = () => {
    userName = "João Silva";
    setName("Alan Moreira");
    console.log(userName);
  };
  console.log(name);

  //2 - useState e input
  const [age, setAge] = useState(25);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      {/* 1 - usestate */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Trocar Nome</button>
      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <p>Digite sua idade</p>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem: {age} anos</p>
      <hr />
    </div>
  );
};

export default HookUseState;
