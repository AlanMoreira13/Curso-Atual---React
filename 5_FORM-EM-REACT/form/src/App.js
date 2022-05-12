import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Seção Form</h1>
      <MyForm
        user={{
          name: "Alan",
          email: "moreiraalan22@gmail.com",
          bio: "Sou um programador",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
