import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import { textChange } from './actions';
import './App.css';

class App extends Component {

  state = {
    inputValue: '',
    textValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {

    const {
      clickButton,
      newValue
    } = this.props;

    const { inputValue, textValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>

        <input
          onChange={this.inputChange}
          type='text'
          value={inputValue}
        />

        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>

        <input
          type="text"
          onChange={(e) => this.setState({
            textValue: e.target.value
          })}
          value={textValue}></input>
        <p>{textValue}</p>


      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  textValue: store.textState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton, textChange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);