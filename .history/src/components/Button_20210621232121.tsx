 import {ButtonHTMLAttributes} from 'react'
 
type ButtonProps = Button
 
 export function Button(props:ButtonProps){
     return (
         <button className='button' {...props} />
     )
 }