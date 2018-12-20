import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="ui three item menu">
        <NavLink exact to="" activeClassName="active" className="item">Projects</NavLink>
        <NavLink to="/about" activeClassName="active" className="item">About</NavLink>
        <NavLink to="/contact" activeClassName="active" className="item">Contact</NavLink>
      </div>
    );
  }
}

export default Header;