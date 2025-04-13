import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [Captain, setCaptain] = useState({
        fullname:{
            firstname:"",
            lastname:""
        },
        email: "",
    });

    return (
        <CaptainDataContext.Provider value={[Captain, setCaptain]}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;
