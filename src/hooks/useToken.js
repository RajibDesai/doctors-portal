import { useEffect, useState } from "react";

// signUp and logIn call useToken
const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-ochre-seven.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accassToken) {
                        localStorage.setItem('accassToken', data.accassToken);
                        setToken(data.accassToken);
                    }
                })
        }
    }, [email]);
    return [token];
}

export default useToken;