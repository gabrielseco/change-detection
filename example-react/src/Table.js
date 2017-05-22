import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {
  constructor() {
    super();
    this.getConfig = this.getConfig.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  
  getConfig() {
    return Object.assign({}, { actions: true },  this.props.config)
  }

  handleClick(evt) {
    this.props.changeConfig();
  }

  render() {
    const config = this.getConfig();
    return (
      <div>
        <button onClick={this.handleClick}>
          RANDOM MESSAGE
        </button>
        <br/>
        <code>
          {JSON.stringify(config, null, 4)}
        </code>
        <p>Counter: {this.state.counter}</p>
      </div>
    )
  }
}

Table.propTypes = {
  config: PropTypes.object.isRequired,
  changeConfig: PropTypes.func.isRequired
}