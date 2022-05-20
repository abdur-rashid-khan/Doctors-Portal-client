import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading/Loading';
import MackingAdmin from '../MackingAdmin/MackingAdmin';

const TotalUser = () => {
    const { isLoading, error, data: user, refetch } = useQuery('userData', () =>
        fetch('https://fast-fjord-41065.herokuapp.com/total-user', {
            method: "GET",
            headers: {
                'authorization': `bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return <p className='text-red-600'>{error}</p>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user?.map((u, index) =>
                                <MackingAdmin key={index} user={u} refetch={refetch} index={index}></MackingAdmin>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalUser;