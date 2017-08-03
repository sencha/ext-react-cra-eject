import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Column } from '@extjs/ext-react';

class App extends Component {

  store = new Ext.data.Store({
    data: [
      { name: 'Microsoft', symbol: 'MSFT' },
      { name: 'Apple', symbol: 'AAPL'}
    ]
  })

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid 
          height="200"
          width="400"
          title="Stocks"
          shadow
          margin={20}
          style={{ textAlign: 'left' }}
          store={this.store}
        >
          <Column text="Name" dataIndex="name" flex={1}/>
          <Column text="Symbol" dataIndex="symbol" flex={1}/>
        </Grid>
      </div>
    );
  }
}

export default App;
