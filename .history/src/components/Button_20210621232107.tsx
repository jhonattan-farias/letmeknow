 import {ButtonHTMLAttributes} from 'react'
 

 
 export function Button(props:ButtonProps){
     return (
         <button className='button' {...props} />
     )
 }