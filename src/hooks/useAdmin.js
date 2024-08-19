import { useEffect, useState } from "react"

// DashboardLayout and AdminRoute components call useAdmin and set email as paramiter
const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [isAdminLoading,setIsAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`https://doctors-portal-server-ochre-seven.vercel.app/users/admin/${email}`)
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            setIsAdmin(data.isAdmin);
            setIsAdminLoading(false);
        })
    }, [email])
    return [isAdmin,isAdminLoading];
}

export default useAdmin;