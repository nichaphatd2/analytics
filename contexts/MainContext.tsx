import React, { useEffect, useRef } from "react";

const MainContext = React.createContext('data0');

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
    const didRunRef = useRef(false);

    useEffect(() => {
        if (didRunRef.current === false) {
            didRunRef.current = true;

        }
    }, []);

    return (
        <MainContext.Provider value={'data1'}>
            {children}
        </MainContext.Provider>
    );
}

export { MainContext, MainContextProvider };
