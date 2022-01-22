import veggie from './vegetables.png';
// import fruit from './fruits.png'
// import grains from './grains.png'
// import protein from './protein.png'
import './App.css';
import List from './List';

function App() {
  return (
    <div className="App">

      <div className="contLogo">
      {/* <img src={fruit} className="logo" alt="fruit" width="100" height="100"  /> */}
         <img src={veggie} className="logoRotate" alt="veggie" width="100" height="100"  /> 
        {/* <img src={grains} className="logo" alt="grains logo" width="100" height="100"  />
         <img src={protein} className="logo" alt="protein logo" width="100" height="100"  /> */}
        </div>
        <div className="App-header"> 
        <h2 className="par1">Grocery List</h2>
        <List/>
        
      </div>

    
    </div>
  );
}

export default App;
