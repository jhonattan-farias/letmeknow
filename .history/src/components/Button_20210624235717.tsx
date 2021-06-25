 import {ButtonHTMLAttributes} from 'react'
 
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOu
}
 
 export function Button(props:ButtonProps){
     return (
         <button className='button' {...props} />
     )
 }