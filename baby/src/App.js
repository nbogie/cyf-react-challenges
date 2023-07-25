
import './App.css';
import Sortednames from './sorted-names';
import Search from './Search';
import { useState } from 'react';

function App() {
const [filterNames, setFilterNames] = useState("");
function setFilter (e) {
  setFilterNames(e.target.value.toLowerCase()) 
}
  return (
    
      <div>

        <div className='appContainer'>
          <Search setFilter = {setFilter}/>
        <Sortednames filterNames = {filterNames}/>
        </div>
      </div>
      
    
  );
}

export default App;
