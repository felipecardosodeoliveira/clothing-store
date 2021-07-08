import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

export default function App() {
    const [currentUser, setState] = useState(null);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapshot => {
                    setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            }
            setState(user);
        });

        return () => {
            unsubscribeFromAuth();
        }

    }, []);

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={SignInAndSignupPage} />
            </Switch>
        </div>
    )
}