import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user")
        if(savedUser){
            return JSON.parse(savedUser)
        }
        else{
            return null
        }
    })
    const [loading, setLoading] = useState(true)
    const [dark, setDark] = useState(false)
    useEffect(() => {
        const darkState = JSON.parse(localStorage.getItem("darkMode"))
        if (!darkState) {
            localStorage.setItem("darkMode", JSON.stringify(dark))
        }
        else {
            setDark(darkState)
        }
    }, [dark])
    const setDarkMode = (value) => {
        setDark(value)
        localStorage.setItem("darkMode", JSON.stringify(value))
    }
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
            if (user) {
                localStorage.setItem("user", JSON.stringify((user)))
            }
            else {
                localStorage.removeItem("user")
            }
        })
        return () => unsubscibe()
    }, [])

    const userDetails = {
        user,
        createUser,
        signInUser,
        setUser,
        loading,
        dark,
        setDarkMode,
    }
    console.log(user?.photoURL)




    return <AuthContext value={userDetails}>{children}</AuthContext>
};

export default AuthProvider;