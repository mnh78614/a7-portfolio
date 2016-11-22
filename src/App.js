import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';

import {Container} from 'react-grid-system';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import Paper from 'material-ui/Paper';

var App = React.createClass({
  getInitialState:function() {
    return ({
      open: false
    });
  },
  toggle:function() {
    this.setState({open: !this.state.open});
  },
  render() {
    return (
      <div>
        <AppBar title="Muhammad's Portfolio"
          onTouchTap={this.toggle}/>

        <Drawer
          open={this.state.open}>

          <Link to='/' onTouchTap={this.toggle}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/about" onTouchTap={this.toggle}>
            <MenuItem>About</MenuItem>
          </Link>
          <Link to="/work" onTouchTap={this.toggle}>
            <MenuItem>Work</MenuItem>
          </Link>
        </Drawer>



        <Container>
          <br></br>
            {this.props.children}
          <br></br>
        </Container>
        <Paper style={{
          position: 'fixed',
          bottom: 0,
          width: '100%'
        }} zDepth={3}>
          <h3><em>&copy; Muhammad Hussain Info343</em></h3>
        </Paper>
      </div>
    );
  }
});

export default App;
