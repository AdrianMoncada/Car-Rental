import React, { createContext, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        id:null,
        auth: false,
        redirect:false,
        rol:'',
        ciudad:''
    });

    const loginLogoutEvent = (userCredentials) => {
        setUser(userCredentials);
    };

    return (
        <UserContext.Provider value={{ user, loginLogoutEvent }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContext;