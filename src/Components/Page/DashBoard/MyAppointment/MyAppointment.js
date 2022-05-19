import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const MyAppointment = () => {
    const [user, loading, error] = useAuthState(auth);
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        if (user) {
            // http://localhost:5000/booking?patientEmail=rashidkhanbd57@gmail.com
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setBooking(data));
        }

    }, [user])
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