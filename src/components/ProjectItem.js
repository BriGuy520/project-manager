import React, { Component } from 'react';


class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    const {title, category, id} = this.props;
    return (
      <li className="Project">
        <b>{title}</b> - {category} <a href="#" onClick={this.deleteProject.bind(this, id)}>X</a>
      </li>
    );
  }
}


export default ProjectItem;
