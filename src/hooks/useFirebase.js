import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  // Providers
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then(
      ((result) => {
        setUser(result.user);
      }).catch((error) => {
        setError(error.message);
      })
    );
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        user({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    signInWithGoogle,
    logOut,
    error,
  };
};

export default useFirebase;
