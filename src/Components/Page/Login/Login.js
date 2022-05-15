import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Loading from "../../shared/Loading/Loading";
import LoginWithXX from "../LoginWithXXX/LoginWithXX";
import { LockClosedIcon } from "@heroicons/react/solid";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";

const Login = () => {
  let errorElement = "";
  let navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const login = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(form, { replace: true });
    Swal("Login successfully", "", "success");
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <section style={{ paddingTop: "2rem" }} className="container mx-auto px-4">
      <div className="">
        <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md  w-full space-y-8 bg-slate-200 p-4">
            <div>
              <div className="user_icon">
                <img
                  className="mx-auto  h-20 w-auto"
                  src="https://i.ibb.co/Ct43kdn/image-removebg-preview-6.png"
                  alt="Workflow"
                />
              </div>
              <h2 className="mt-1 font-serif text-center text-3xl font-extrabold text-gray-900">
                Login
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="">
                  <label htmlFor="email-address" className="text-slate-700 pt-2">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="Email address"
                  />
                </div>
                <div className="pt-3">
                  <label htmlFor="password" className="text-slate-700 pt-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="block sm:flex items-center justify-between">
                <div className="flex  items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm pt-2 md:p-0">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
{
  /* <LoginWithXX></LoginWithXX> */
}
