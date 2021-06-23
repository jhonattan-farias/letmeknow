import { createContext } from "react";

interface AuthContextProps{
    user:User
    signInWithGoogle:() => Promise<void>
}

interface User {
    id:string
    avatar:string
    name:string
}

const [user,setUser] = useState<User>({} as User)

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider() {
    return ()
}