import React from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import List from './components/List'

function App() {
  
  return (
    <div className="App">
      <Header />
      <Filter />
      <List />
    </div>
  );
}

export default App;
