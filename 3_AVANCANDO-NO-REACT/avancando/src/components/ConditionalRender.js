import { useState } from "react"


const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Alan");

  return (
    <div>
        
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora eu imprimo falso!</p>}
        <h1>If ternário</h1>
        {name === "Alan" ? (
            <div>
                <h3>Olá, eu sou o Alan</h3>
            </div>
        ) : (
            <div>
                <h3>Olá, eu sou o João</h3>
            </div>
        )}
        <button onClick={() => setName("João")}>Clique aqui!</button>

    </div>
  )
}

export default ConditionalRender