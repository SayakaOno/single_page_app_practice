import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';

class Layout extends React.Component {

  render() {
    return (
      <div style={{ marginRight: "20px", marginLeft: "20px" }}>
        <h1>Single Page Application</h1>
        <BrowserRouter>
          <div>
            <Header/>
            {this.props.children} 
          </div>
        </BrowserRouter>
      </div>
    );
  }

  changeTitle = title => {
    this.setState({ title });
  }
}

export default Layout;