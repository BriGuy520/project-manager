import React, { Component } from 'react';
import uuid from 'uuid';


class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  constructor(){
    super();
    this.state = {
      newProject: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){

    if(this.refs.title.value === ''){
      alert('Please Enter a Title');
    } else {
      this.setState({newProject:{
        uuid: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
          // console.log(this.state);
          this.props.addProject(this.state.newProject);
      });
    }
    event.preventDefault();
  }

  render() {
    const categories = this.props.categories.map((category, index) => {
      return <option key={index} value={category}>{category}</option>;

    });

    return (
      <div>
        <h3>Add Project:</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categories}
            </select>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProject;
