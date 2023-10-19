import {auth , provider} from '../services/firebase'
import { signInWithPopup } from "firebase/auth"
const AuthLogin = () => {
  const firebaseSignin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setFirebaseEmail(data.user.email)
      var userData = {
        username:data.user.email,
        displayName:data.user.displayName,
        uid:data.user.uid,
        loggedIn:true,
        date:new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString(),
      };
      localStorage.setItem("user_data", JSON.stringify(userData))
    }); 
  }

  return (

                    <div className="d-grid">
                      <button 
                      className="btn btn-default waves-effect waves-light"  
                      onClick={firebaseSignin}
                      type="button">Sign in With Google</button>
                    </div>
  );
}
