import React from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import List from './components/List'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list: [],
     };
  }  

  updateList = (list) => {
    this.setState({list})
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <Filter updateList={this.updateList}/>
        <List books={this.state.list}/>
      </div>
    );
  }
}

export default App;
