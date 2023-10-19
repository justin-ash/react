import { React, useEffect } from "react";

const AuthLogin = () => {
useEffect(() => {
    google.accounts.id.initialize({
      client_id:"211710846596-t3m4re5ob569up9ntuou0ndbfp1jm20c.apps.googleusercontent.com",
      callback: responseGoogle
    })

    google.accounts.id.renderButton(
      document.getElementById("googleSignIn"),
      {theme:"outlibe", size:"large"}
    )
  }, []);

const responseGoogle = (response) => {
    console.log(response);
    if (response.error === 'popup_closed_by_user') {
      // Handle the user closing the Google Sign-In popup
      console.log('User closed the popup');
    } else {
      var userObject = jwt_decode(response.credential)
      console.log(userObject);
    }
    // Handle the response here, e.g., send it to your server for authentication.
  };
return (
  <div id="googleSignIn"></div>
    );
}

export default AuthLogin;
