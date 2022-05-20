import React from 'react';
import Swal from 'sweetalert2';

const MackingAdmin = ({ user ,refetch }) => {
    // adminBtn 
    const {email } = user;
    const adminBtn = () => {
        fetch(`https://fast-fjord-41065.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization:`bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status===403){
                    return Swal.fire('Forbidden' ,' ','error');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                Swal.fire('create admin successfully' ,' ','success');
                refetch()
            })
    }
    return (
        <tr>
            <td>1</td>
            <td>{user.email}</td>
            <td>
                {
                    user?.role?
                    <button disabled className="btn btn-sm bg-sky-50 text-white">Admin</button> 
                    :
                    <button onClick={adminBtn} className="btn btn-sm bg-sky-500 text-black hover:text-white">Admin</button>
                }
            </td>
            <td><button className="btn btn-sm bg-red-600 text-black hover:text-white">Remove</button></td>
        </tr>
    );
};

export default MackingAdmin;