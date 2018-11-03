import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map((project, index) => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={index} {...project} />
        );
      });
    }
    return (
      <div className="App">
        <h1>Latest Projects</h1>
        {projectItems}
      </div>
    );
  }
}



export default Projects;
