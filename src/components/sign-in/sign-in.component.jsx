import React from 'react';

import { useInput } from '../../hooks/useInput';

import FormInput from '../form-input/form-input.component';
import CustomButom from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export default function SignIn() {
    const [email, resetEmail] = useInput('');
    const [password, resetPassword] = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            auth.signInWithEmailAndPassword(
                email.value,
                password.value
            );
            resetEmail();
            resetPassword();
        } catch (error) {
            console.log('error: ', error.message);
        }

    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    {...email}
                    type="email"
                    name="email"
                    id="email"
                    label="email"
                    required
                />

                <FormInput
                    {...password}
                    type="password"
                    name="password"
                    id="password"
                    label="password"
                    required
                />

                <div className="buttons">
                    <CustomButom
                        type="submit">
                        Sign in
                    </CustomButom>
                    <CustomButom
                        type='button'
                        isGoogleSignIn
                        onClick={signInWithGoogle}
                    >
                        Sign in with Google
                    </CustomButom>
                </div>
            </form>
        </div>
    )
}