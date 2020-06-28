import React, { Component } from 'react';

import FormInput from '../form-input/form.input.component'; 
import CustomButton from '../custom-button/custom-button.component';
import './signin.component.style.scss';

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: ''});
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form autoComplete='off' onSubmit={this.handleSubmit}>
                    <FormInput 
                        autoFocus
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <FormInput 
                        name="password" 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        label='Password'
                    />                    
                    <CustomButton type="submit">
                        Submit Form
                    </CustomButton>
                </form>
            </div>
        )
    }
}