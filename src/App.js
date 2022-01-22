import veggie from './vegetables.png';
import './App.css';
import List from './List';

function App() {
  return (
    <div className="App">

      <div className="contLogo">
       <img src={veggie} className="logoRotate" alt="veggie" width="100" height="100"  /> 
      </div>
        <div className="App-header"> 
        <h2 className="par1">Grocery List</h2>
        <List/>
        
      </div>

    
    </div>
  );
}

export default App;
