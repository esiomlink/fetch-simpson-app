import React from 'react';
import './App.css';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';

function App() {
  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?num=1')
      // Extract the DATA from the received response
      .then((response) => response.data)
      
      // Use this data to update the state
      .then((data) => {
        console.log(data)
        setSimpson([...data]);
    
        
      });
  };
  const [Simpson, setSimpson] = React.useState("");

  return (
    <div className='App'>
      <DisplaySimpson  Simpson={Simpson}/>
      <button type='button' onClick={getSimpson}>
        Get 
      </button>
    </div>
  );
}

export default App;
