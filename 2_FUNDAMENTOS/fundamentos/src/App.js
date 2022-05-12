// components
import FirstComponents from './components/FirstComponent';
import TamplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challange from './components/Challange';


//styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponents/>
      <TamplateExpressions/>
      <MyComponent/>
      <Events />
      <Challange/>
    </div>
  );
}

export default App;
