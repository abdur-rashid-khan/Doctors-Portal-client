import React, { useEffect } from "react";
import auth from "../../../firebase.init";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";
import Swal from "sweetalert2";
import googleIcon from '../../../assets/icons/google.png'
import fbIcon from '../../../assets/icons/fb.png'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const LoginWithOther = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const form = location.state?.from?.pathname || "/";
  let errorElement = "";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const loginWithGoogle = () => {
    signInWithGoogle();
  };


  useEffect(()=>{
    if (user) {
      navigate(form, { replace: true });
      Swal.fire("Login successfully", "", "success");
    }
  },[user , navigate , form])


  if (loading) {
    return <Loading></Loading>;
  }


  if (error) {
    errorElement = <p className="text-red-600">Error:{error?.message} </p>;
  }


  return (
    <div className="">
      {errorElement}
      <div className="flex flex-col w-full border-opacity-0">
        <div className="divider">OR</div>
      </div>
      <div className="flex items-center justify-items-center justify-center gap-4">
        <div className="google">
          <button  onClick={loginWithGoogle}>
            <img style={{width:'45px',height:'45px'}} src={googleIcon} alt="google icon" />
          </button>
        </div>
        <div className="google">
          <button>
            <img style={{width:'36px',height:'36px'}} src={fbIcon} alt="fb icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginWithOther;
