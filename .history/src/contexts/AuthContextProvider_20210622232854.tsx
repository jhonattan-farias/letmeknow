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

const [user,setUser] = useState<User>({} as User)

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider(props) {
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
            console.log(user)
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
        </AuthContext.Provider>
    )
}