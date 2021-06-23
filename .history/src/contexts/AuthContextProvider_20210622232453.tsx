import { createContext } from "react";

interface AuthContextProps{
    user:User
    signInWithGoogle:() => Promise<void>
  }

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider() {

}