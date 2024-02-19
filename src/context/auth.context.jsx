import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    const [isLoggedout, setIsLoggedout] = useState(true);
    const handleLoggedin = () => {
        setIsLoggedIn(true);
    };
    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
};