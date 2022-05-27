// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";

import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookLayoutEffect from "../components/HookLayoutEffect";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookLayoutEffect />
    </div>
  );
};

export default Home;
