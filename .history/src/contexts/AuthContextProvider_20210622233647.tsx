import { createContext, ReactNode, useEffect, useState } from "react";
import {firebase,auth} from '../services/firebase'

interface AuthContextProps{
    user:User
    signInWithGoogle:() => Promise<void>
}

interface User {
    id:string
    avatar:string
    name:string
}

interface AuthContextProviderProps{
    children:ReactNode
}


export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider(props:AuthContextProviderProps) {
    const [user,setUser] = useState<User>({} as User)
    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
    
          const response = await auth.signInWithPopup(provider)
    
          if(response.user){
            const {uid,photoURL,displayName} = response.user
    
            if(!displayName || !photoURL){
              throw new Error('missing information from Google account')
            }
    
            setUser({
              id:uid,
              name:displayName,
              avatar:photoURL,
            })
          }     
        }
    
        useEffect(() => {
          const unsubscribe =  auth.onAuthStateChanged(user => {
            if(user){
              const {uid,photoURL,displayName} = user
              console.log('kdjsfds')
      
              if(!displayName || !photoURL){
                throw new Error('missing information from Google account')
              }
      
              setUser({
                id:uid,
                name:displayName,
                avatar:photoURL,
              })
            }
          }) 
          return () => {
            unsubscribe()
          }
        },[])
    return (
        <AuthContext.Provider value={{user,signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}