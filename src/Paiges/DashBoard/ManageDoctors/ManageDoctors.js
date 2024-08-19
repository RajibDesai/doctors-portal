import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import ConfurmModal from '../../Shared/ConfurmModal/ConfurmModal';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState([]);

    const closeModal = () => {
        setDeleteDoctor([])
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
           
                const res = await fetch('https://doctors-portal-server-ochre-seven.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accassToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
    });

    const handleDeleteDoctors = doctor => {
        console.log(doctor)
        fetch(`https://doctors-portal-server-ochre-seven.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accassToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`docto ${doctor.name} deleted successfully`)
                    refetch()
                }
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-4xl text-center">Manage Doctors : {doctors?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Se No:</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                            <img src={doctor.image} alt='img' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <button className="btn btn-xs btn-error" onClick={() => { document.getElementById('confurmmodal').showModal(); setDeleteDoctor(doctor) }}>Delet</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <ConfurmModal
                    title={`Are you sure want to delete`}
                    message={`if you delete ${deleteDoctor.name}. it can't be undone`}
                    successActon={handleDeleteDoctors}
                    modalData={deleteDoctor}
                    deleteButtonName="Delete"
                    closeModal={closeModal}
                >
                </ConfurmModal>
            }
        </div>
    );
};

export default ManageDoctors;