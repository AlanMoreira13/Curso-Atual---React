import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import CardDetails from "./components/CardDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunctions from "./components/ExecuteFunctions";
import Fragment from "./components/Fragments";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "Joaquim";
  const [userName] = useState("Pedro");
  const cars = [
    { id: 1, brand: "Ferrari", km: 15151, color: "Amarela", newCar: false },
    { id: 2, brand: "Ford", km: 6868, color: "Azul", newCar: false },
    { id: 3, brand: "Kia", km: 0, color: "Chumbo", newCar: true },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, nome: "Alan", idade: 29, profissão: "Programador" },
    { id: 2, nome: "Brenda", idade: 28, profissão: "Advogada" },
    { id: 3, nome: "Sophia", idade: 13, profissão: "Estudante" },
  ];

  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* imagem em public */}
      <img src="/img1.jpg" alt="Imagem de uma Paisagem" />

      {/* imagem em assets */}
      <div>
        <img src={City} alt="Imagem de uma cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName nome={userName} />
      {/* destructuring */}
      <CardDetails brand="Audi" km={45000} color="Preto" />
      {/* reaproveitando */}
      <CardDetails brand="Mercedez" km={0} color="Prata" newCar={true} />
      <CardDetails brand="BMW" km={25000} color="Azul" newCar={false} />
      <CardDetails brand="Jeep" km={39000} color="Branco" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="Prop do fragment" />
      {/* children */}
      <Container valor="Este é o meu valor">
        <p>Este é o conteúdo</p>
      </Container>
      <Container valor="Este é o meu novo valor">
        <h5>Este é o conteúdo em h5</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunctions myFunction={showMessage} />
      {/* stare lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio 4 */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissão={user.profissão}
        />
      ))}
    </div>
  );
}

export default App;
