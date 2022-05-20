import { useEffect, useState } from "react";


const UseAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading , setAdminLoading] = useState(true);
    const email = user?.email;
    useEffect(() => {
        fetch(`https://fast-fjord-41065.herokuapp.com/admin/${email}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAdmin(data.admin);
                setAdminLoading(false);
            })
    }, [user , email]);
    return [admin , adminLoading];
};

export default UseAdmin;