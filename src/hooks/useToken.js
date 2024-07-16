import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
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