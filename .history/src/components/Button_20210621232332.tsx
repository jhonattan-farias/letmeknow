 import {ButtonHTMLAttributes} from 'react'
 
import from './s'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
 
 export function Button(props:ButtonProps){
     return (
         <button className='button' {...props} />
     )
 }