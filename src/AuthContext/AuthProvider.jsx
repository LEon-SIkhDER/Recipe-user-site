import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
        return () => unsubscibe()
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }





    const userDetails = {
        user,
        createUser,
        signInUser,
        setUser,

    }
    return <AuthContext value={userDetails}>{children}</AuthContext>
};

export default AuthProvider;