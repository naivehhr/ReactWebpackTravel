import React, { Component } from 'react';
import './sass/main.scss'
import HeaderTop from './component/header/headerTop'
import Header from './component/header/header'
export default class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className='container' >
        <HeaderTop />
        <Header />
      </div>
    );
  }
}
