import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-ochre-seven.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://doctors-portal-server-ochre-seven.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accassToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Make Admin Successful')
                    
                }
            })
    }

    return (
        <div>
            <h3 className="text-3xl">All Users</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-warning'>Delte</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;