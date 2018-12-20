import React from 'react';

class About extends React.Component {
  render(){
    return (
      <div className="ui items">
        <h1>About</h1>
        <div className="item">
          <div className="ui small image">
            <img src="https://via.placeholder.com/150/0000FF/808080" />
          </div>
          <div className="middle aligned content">
            <div className="header">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="description">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
