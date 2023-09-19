import axios from "axios";
import { createContext, useState, ReactNode, useEffect, useContext } from "react";

interface User {
    id: number;
    username:string;
    email:string;
    img:string|null;
}

interface LoginInfo {
    username: string;
    password: string;
}

interface Value {
    currentUser: User|null;
    login: (inputs: LoginInfo) => Promise<void>;
    logout: ()=>Promise<void>;
}

export const AuthContext = createContext<Value>({
    currentUser:null,
    login: async ()=>{},
    logout: async ()=>{}
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(JSON.parse(localStorage.getItem("user")!) || null);

    const login = async (inputs:LoginInfo) => {
        
        const { data } = await axios.post(`${process.env.REACT_APP_PORT}/auth/login`, inputs);
        
        setCurrentUser({email:data.email,username:data.username,id:data.id,img:data.img});
        
    }
    const logout = async () => {
        await axios.post(`${process.env.REACT_APP_PORT}/auth/logout`);
        setCurrentUser(null);
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
    )
}
export const UserState = () => {
    return useContext(AuthContext)
}