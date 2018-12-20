import React from 'react';
import Header from './Header';

class Layout extends React.Component {

  render() {
    return (
      <div style={{ marginRight: "20px", marginLeft: "20px" }}>
        <h1>Single Page Application</h1>
        <div>
          <Header/>
          {this.props.children} 
        </div>
      </div>
    );
  }

  changeTitle = title => {
    this.setState({ title });
  }
}

export default Layout;