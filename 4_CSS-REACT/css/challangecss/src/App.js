import './App.css';
import MyCars from './components/MyCars';

function App() {

  const cars = [
    {id: 1 , marca:"Fiat", cor: "Branco", modelo: "Toro"},
    {id: 2 , marca:"Ford", cor: "Preto", modelo: "Fusion"},
    {id: 3 , marca:"Audi", cor: "Azul", modelo: "A3"}
]

  return (
    <div className="App">
      <h1>Desafio 5</h1>
      {cars.map((car) => (
      <MyCars 
      key={car.id}
      marca={car.marca}
      cor={car.cor}
      modelo={car.modelo}
      />
    ))}
   
    </div>
  );
}

export default App;
