import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log("Signup function called with email:", email); // Debug: Check if function is called
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created successfully:", userCredential.user); // Debug: User creation success
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Error during user creation:", error); // Debug: Log error details
        throw error;
      });
  }

  function login(email, password) {
    console.log("Login function called with email:", email); // Debug: Check if function is called
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in successfully:", userCredential.user); // Debug: User login success
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Error during login:", error); // Debug: Log error details
        throw error;
      });
  }

  function logout() {
    console.log("Logout function called"); // Debug: Check if function is called
    return signOut(auth)
      .then(() => {
        console.log("User logged out successfully"); // Debug: User logout success
      })
      .catch((error) => {
        console.error("Error during logout:", error); // Debug: Log error details
        throw error;
      });
  }

  useEffect(() => {
    console.log("Setting up auth state change listener"); // Debug: Check if useEffect is called
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed, current user:", user); // Debug: Log current user
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      console.log("Cleaning up auth state change listener"); // Debug: Check if cleanup is called
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
