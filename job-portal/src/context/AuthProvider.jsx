import React, { createContext, useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setLoadingFalseWithDelay = () => {
    setTimeout(() => setLoading(false), 500);
  };

  const createUser = async (email, password, displayName) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    setUser(result.user);
    setLoadingFalseWithDelay();
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => {
        setLoadingFalseWithDelay();
      });
  };

  const signUpWithGmail = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    setUser(result.user);
    setLoadingFalseWithDelay();
  };

  const signUpWithGithub = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, githubProvider);
    setUser(result.user);
    setLoadingFalseWithDelay();
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .finally(() => {
        setLoadingFalseWithDelay();
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, createUser, signIn, signUpWithGmail, signUpWithGithub, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
