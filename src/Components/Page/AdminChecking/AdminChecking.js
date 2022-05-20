import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseAdmin from '../../Hooks/UseAdmin/UseAdmin';
import Loading from '../../shared/Loading/Loading';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';

const AdminChecking = ({children}) => {
   const [user,loading] = useAuthState(auth);
   const [admin , adminLoading] = UseAdmin(user);

   const location = useLocation();
   if(loading || adminLoading){
      return <Loading></Loading>;
   }
   if(!user || !admin){
       signOut(auth);
       Swal.fire('Login again','' , 'info');
       localStorage.removeItem('token')
      return <Navigate to="/login" state={{ from: location }} replace />
      
   }
   return children;
};
export default AdminChecking;