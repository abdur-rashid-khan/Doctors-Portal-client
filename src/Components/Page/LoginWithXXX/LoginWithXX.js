// import React from 'react';
// import auth from '../../../firebase.init';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useNavigate,useLocation } from 'react-router-dom';
// import Loading from '../../shared/Loading/Loading';
// import Swal from 'sweetalert2';

// const LoginWithXX = () => {
//    let navigate = useNavigate();
//    let location =useLocation();
//    const form = location.state?.from?.pathname || "/";
//    let errorElement='';
//    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//    const loginWithGoogle =()=>{
//       signInWithGoogle()
//    }
//    if(loading ){
//       return <Loading></Loading>
//    }
//    if(user){
//       navigate(form,{replace:true});
//       Swal("Login successfully","", "success");
//    }
//    if (error) {
//       errorElement = <p className='text-red-600'>Error:{error?.message} </p>
//    }
//    return (
//       <div className='py-4'>
//          {
//             errorElement
//          }
//          <button>login with google</button>
//       </div>
//    );
// };

// export default LoginWithXX;