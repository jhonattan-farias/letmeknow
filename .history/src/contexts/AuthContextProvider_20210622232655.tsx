import { createContext, useState } from "react";
import 

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
    return ()
}