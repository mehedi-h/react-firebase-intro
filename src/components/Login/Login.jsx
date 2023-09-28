import app from "../../firebase/firebase.init";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const Login = () => {

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        console.log('google aitase...');
    }

    return (
        <div className="text-center py-3">
            <button onClick={handleGoogleSignIn} className="bg-green-600 text-white px-5 py-2 rounded-md">Google Login</button>
        </div>
    );
};

export default Login;