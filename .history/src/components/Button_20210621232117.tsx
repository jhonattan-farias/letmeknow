 import {ButtonHTMLAttributes} from 'react'
 
type ButtonProps = #a8a8b3
 
 export function Button(props:ButtonProps){
     return (
         <button className='button' {...props} />
     )
 }