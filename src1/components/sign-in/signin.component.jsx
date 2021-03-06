import React, { Component } from 'react'

import FormInput from '../form-input/form.input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './signin.component.style.scss'

export default class Signin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  clearForm = () => {
    this.setState({ email: '', password: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.clearForm()
    } catch (e) {
      alert(e.message)
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render () {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form autoComplete='off' onSubmit={this.handleSubmit}>
          <FormInput
            autoFocus
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
            label='Email'
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
            label='Password'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Submit Form</CustomButton>
            <CustomButton
              type='button'
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
