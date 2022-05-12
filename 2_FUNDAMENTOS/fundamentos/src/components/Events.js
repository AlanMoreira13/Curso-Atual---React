const Events = () => {

    const handleMyEvent = () => {

        console.log("O botão foi clicado")

    };

    const RenderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Também renderizo isso</h1>
        }
    }

    return (

        <div>
            <div>
                <button onClick={handleMyEvent}>Click</button>
            </div>
            <div>
                <button onClick={()=>{console.log("Click event inline")}}> Clicar </button>
            </div>
            {RenderSomething(true)}
            {RenderSomething(false)}
        </div>

    );


}

export default Events;