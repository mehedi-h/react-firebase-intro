import { useState } from "react";
import app from "../../firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    // console.log(auth);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const userData = result.user;
            console.log(userData);
            setUser(userData)
        })
        .catch(error => {
            console.log('error', error.message) 
        })
    }

    const handlegithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const userData = result.user
            console.log(userData);
            setUser(userData)
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }

    const handleSignOut = () => {
        signOut(auth) 
        .then(result => {
            console.log(result);
            setUser(null)
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="text-center py-3">

            {/* user ? logout : login */}

            {
                user ? 
                <button onClick={handleSignOut} className="bg-red-500 text-white px-5 py-2 rounded-md">Log Out</button> :
                <div className="flex justify-center items-center gap-8">
                    <button onClick={handleGoogleSignIn} className="bg-green-500 text-white px-5 py-2 rounded-md">Google Login</button>
                    <button onClick={handlegithubSignIn} className="bg-gray-800 text-white px-5 py-2 rounded-md">Github Login</button>
                </div>
            }

            {
                user &&
                <div>
                    <h2>User : {user.displayName}</h2>
                    <p>Email : {user.email}</p>
                    <img src={user.photoURL} alt="" />

                </div>
            }
        </div>
    );
};

export default Login;