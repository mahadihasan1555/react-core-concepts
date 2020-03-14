import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>I'm a react person</p>
        <person name = "mahadi"></person>
        <person></person>
        <person></person>
        <person></person>
       
      </header>
    </div>
  );
}
function product (props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:'200px',
    width: '200px',
    float: 'left'
  }

}

function person (props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return (
  <div style= {personStyle}>
    <h1>Name: Sakib</h1>
    <h3>hero of the year</h3>


  </div> 
  )
}

export default App;
