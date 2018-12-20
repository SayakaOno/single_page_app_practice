import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="ui three item menu">
        <Link to="/" className="active item">Projects</Link>
        <Link to="/about" className="item">About</Link>
        <Link to="/contact" className="item">Contact</Link>
      </div>
    );
  }
}

export default Header;