import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {

    renderError({error, touched}) {
        if(error && touched)
        return(
            <div>{error}</div>
        )
    }
    renderInput = ({ input, label, meta }) => {
        return(
            <div>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field 
                    name='title' 
                    component={this.renderInput} 
                    label='Enter title'
                />
                <Field 
                    name='description' 
                    component={this.renderInput} 
                    label='Enter description'
                />
                <button>Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const error = {}
    if(!formValues.title) error.title = 'Must enter title' 
    if(!formValues.description) error.description = 'Must enter description' 
    return error
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm)
