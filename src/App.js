import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo"
function App() {
  return (
   <div>
    <h1>My Todos</h1>
    <Todo text = 'Fist Todo'/>
    <Todo text = 'Second' />
    <Todo text = ' Third'/>
    <Todo text = 'Fourth ' />


   </div>
  );
}

export default App;
