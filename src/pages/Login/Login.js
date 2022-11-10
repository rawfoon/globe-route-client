import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";


const Login = () => {


    const [error, setError] = useState('')
  const { signIn, setLoading,  providerLogin } = useContext(AuthContext);

  useTitle('Login')

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset()
        setError('')

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
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
      .finally(()=>{
        setLoading(false)
      })
  };


  const handleGoogleSignIn = ()=>{
    console.log('clicked')
    providerLogin(googleProvider)
    .then(result => {
        const user = result.user
        console.log(user)
        navigate(from, {replace: true})

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
    .catch(error => console.error(error))

}
  const handleGithubSignIn = ()=>{
    console.log('clicked')
    providerLogin(githubProvider)
    .then(result => {
        const user = result.user
        // console.log(user)

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
    .catch(error => console.error(error))

}



  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center dark:bg-gray-800 dark:text-gray-100">
        {/* login container  */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center  dark:bg-gray-900 dark:text-gray-100">
          {/* form */}
          <div className="md:w-1/2 px-8 md:px-16 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="font-bold text-2xl text-[#002D74] dark:text-slate-200">Login</h2>
            <p className="text-xs mt-4 text-[#002D74] dark:text-slate-200">
              If you are already a member, easily log in
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border font-semibold text-slate-900 dark:bg-slate-300"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full font-semibold text-slate-900 dark:bg-slate-300"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div>
                    <p>{error}</p>
                </div>
              </div>
              <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <div className="flex justify-center gap-4">
            <button onClick={handleGoogleSignIn} className="bg-white border p-3 rounded-full mt-5  hover:scale-105 duration-300 text-[#002D74] dark:bg-slate-300">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              
            </button>

            <button onClick={handleGithubSignIn} className="bg-white border p-3 rounded-full mt-5  hover:scale-105 duration-300 text-[#002D74] dark:bg-slate-300">
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="25px">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              
            </button>
            </div>
{/* 
            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div> */}

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74] ">
              <p className="dark:text-slate-200" >Don't have an account?</p>
              <Link to='/register' className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 dark:bg-slate-300">
                Register
              </Link>
            </div>
          </div>

          {/* image  */}
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
            //   src="https://egymerch.com/site_assets/assets/imgs/login/login.pnghttps://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-8.jpg?w=826&t=st=1666780644~exp=1666781244~hmac=afa77b9ba16c6a730a05fb57aedc8bb7234eadd4cd97adf95e2bec36333bc161"
              src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-8.jpg?w=826&t=st=1666780644~exp=1666781244~hmac=afa77b9ba16c6a730a05fb57aedc8bb7234eadd4cd97adf95e2bec36333bc161"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
