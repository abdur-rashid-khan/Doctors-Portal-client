import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const [user, loading, error] = useAuthState(auth);
    const [booking, setBooking] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            // http://localhost:5000/booking?patientEmail=rashidkhanbd57@gmail.com
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `bearer ${localStorage.getItem('token')}`,
                },
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        Swal.fire("Forbidden", "", "error");
                        localStorage.removeItem('token')
                        signOut(auth);
                        return navigate('/login');
                    }
                    return res.json()
                })
                .then(data => setBooking(data));
        }

    }, [user , navigate])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='active'>
                            <th>Serial</th>
                            <th>Patient Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-base md:text-2xl '>
                            {
                                booking.length === 0 && 'No Data Found '
                            }
                        </tr>
                        {
                            booking.map((b, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{b.patientName}</td>
                                    <td>{b.treatment}</td>
                                    <td>{b.date}</td>
                                    <td>{b.slot}</td>
                                </tr>
                            )
                        }

                    </tbody>
                    {/* <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot> */}
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;