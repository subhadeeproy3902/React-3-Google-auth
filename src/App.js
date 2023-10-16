import './App.css';
import { signInWithGoogle, auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getout = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("email", user.email);
        localStorage.setItem("profilePic", user.photoURL);
      } else {
        setUser(null);
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("profilePic");
      }
    });

    return () => getout();
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      {user ? (
        <div>
          <button className='sign-out-btn' onClick={handleSignOut}>Sign Out</button>
          <h1>{user.displayName}</h1>
          <h3>{user.email}</h3>
          <img className='image' src={user.photoURL} alt="" width={180} height={180} />
        </div>
      ) : (
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign In With Google</button>
      )}
    </div>
  );
}

export default App;
