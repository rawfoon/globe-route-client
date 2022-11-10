import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterImg from "../../Assets/Register/register.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";


const Register = () => {
  const { createUser, updateUserProfile, verifyEmail, providerLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  useTitle('Register')

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        handleUpdateUserProfile(name, photoURL);
        // handleEmailVarification()
        toast("Successfully Signed Up", {
          position: "top-center",
          autoClose: 2000,
        });
        navigate(from, { replace: true });

        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const handleGoogleSignIn = () => {
    // console.log('clicked')
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });


        const currentUser = {
          email: user.email
        }

        // get jwt 

        fetch(`https://globe-route-travels.vercel.app/jwt`,{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data=>{
          // console.log(data);
          localStorage.setItem('globeRoutTravelToken', data.token)
          navigate(from, {replace: true})
        })
        .catch(e => console.error(e))






      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        
        const currentUser = {
          email: user.email
        }

        // get jwt 

        fetch(`https://globe-route-travels.vercel.app/jwt`,{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data=>{
          // console.log(data);
          localStorage.setItem('globeRoutTravelToken', data.token)
          navigate(from, {replace: true})
        })
        .catch(e => console.error(e))
        

        
      })
      .catch((error) => console.error(error));
  };

  const handleEmailVarification = () => {
    verifyEmail()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div>
      
    </div>
  );
};

export default Register;
