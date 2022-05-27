import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDataBase = useCallback(() => {
    return ["Alan", "Brenda", "Silva"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDataBase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <h4>{counter}</h4>
      <hr />
    </div>
  );
};

export default HookUseCallback;
