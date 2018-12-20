import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div className="ui three column grid">
          <div className="column">
            <div className="ui segment">
              <img src="https://via.placeholder.com/150/0000FF/808080" />
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src="https://via.placeholder.com/150/FF0000/FFFFFF" />
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src="https://via.placeholder.com/150/FFFF00/000000" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;