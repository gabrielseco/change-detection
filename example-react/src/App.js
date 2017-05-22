import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  constructor() {
    super();
    this.changeConfig = this.changeConfig.bind(this);
    this.state = {
      config: {
        message: 'Message'
      }
    }
  }
  changeConfig() {
    this.setState({
      config: {
        message: Math.random().toString(10)
      } 
    });
  }
  render() {
    const { config } = this.state;
    return (
      <div>
        <Table config={config} changeConfig={this.changeConfig}/>
      </div>
    );
  }
}

export default App;
