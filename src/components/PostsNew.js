import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error && 'has-danger'}`;
    return (
      <div className={className}>
        <label htmlFor="">{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {touched && <p className="text-help">{error}</p>}
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories';
  }
  if (!values.content) {
    errors.content = 'Enter a content';
  }
  return errors;
};

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(connect(null, { createPost })(PostsNew));
