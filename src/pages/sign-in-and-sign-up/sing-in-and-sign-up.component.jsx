import React from 'react'

import SignIn from '../../components/sign-in/signin.component'
import SinUp from '../../components/sign-up/sign-up.component'
import './sing-in-and-sign-up.component.style.scss'

export default function SigninAndSignup (props) {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SinUp />
    </div>
  )
}
