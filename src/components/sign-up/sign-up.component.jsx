import React from 'react';

import { useInput } from '../../hooks/useInput';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export default function SignUp() {
    const [displayName, resetName] = useInput('');
    const [email, resetEmail] = useInput('');
    const [password, resetPassword] = useInput('');
    const [confirmPassword, resetConfirmPassword] = useInput('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (password.value !== confirmPassword.value) {
            alert("passwords don't match");
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email.value, password.value);
            await createUserProfileDocument(user, { displayName: displayName.value });
            resetName();
            resetEmail();
            resetPassword();
            resetConfirmPassword();

        } catch (error) {
            alert(error.message);

        }
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    {...displayName}
                    type='text'
                    name='displayName'
                    label='Display Name'
                    required
                ></FormInput>
                <FormInput
                    {...email}
                    type='email'
                    name='email'
                    label='Email'
                    required
                ></FormInput>
                <FormInput
                    {...password}
                    type='password'
                    name='password'
                    label='Password'
                    required
                ></FormInput>
                <FormInput
                    {...confirmPassword}
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    required
                ></FormInput>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}


