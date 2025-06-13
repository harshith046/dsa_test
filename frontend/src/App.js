import './App.css';
import Todo from './components/Todo'; 
import Filter from './components/Filter';
import Extra from './components/Extra';

function App() {
  return (
    <div className="App">
      <div>
        <h1>A ToDo application</h1>
        <Todo/>
        <h2>Filter your tasks</h2>
        <Filter/>
        <h2>Mark your tasks</h2>
        <Extra/>
      </div>
    </div>
  );
}

export default App;
