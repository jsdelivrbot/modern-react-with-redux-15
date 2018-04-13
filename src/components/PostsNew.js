import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <Field label='Title for Post' name="title" component={this.renderField} />
        <Field label='Tags' name="tags" component={this.renderField} />
      </form>
    );
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label htmlFor="">{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
})(PostsNew);
