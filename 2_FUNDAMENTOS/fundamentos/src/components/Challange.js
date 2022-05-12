const Challange = () => {

    const a = 8;
    const b = 4;
    
    return (
        <div>
            <h1>Imprindo os valores na tela: {a}, {b}</h1>
            <button onClick={() => {console.log(a+b)}}>Clique aqui para somar e ver no console</button>
        </div>
    )

};

export default Challange;
