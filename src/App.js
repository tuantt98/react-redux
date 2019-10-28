import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item'
// import { connect } from 'net';
import { connect } from 'react-redux'


class App extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state ={
  //     data:this.props.data
  //   }
  // }
  
  render(){
    console.log('Render App.....')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.props.data}
       <Item></Item>
      </header>
    </div>
  );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.num
  }
}
export default connect(mapStateToProps)(App)
