import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }






    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (user) => {
                setUser(user)
                setLoading(false)
                console.log("setting loading")
            
        })
        return () => unsubscibe()
    }, [])






    const userDetails = {
        user,
        createUser,
        signInUser,
        setUser,
        loading,

    }
    return <AuthContext value={userDetails}>{children}</AuthContext>
};

export default AuthProvider;