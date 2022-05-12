const TamplateExpressions = () => {
    
    const name = "Alan";
    const data = {
        job: "programador",
        age: 29,
    }

    return (
        <div>
            <h1>Meu nome é {name} e eu sou um {data.job}!</h1>
            <p>{5*6}</p>
            <p>{console.log("Olá mundooo")}</p>

        </div>
    )

} 

export default TamplateExpressions;