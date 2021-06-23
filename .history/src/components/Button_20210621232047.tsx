 import {ButtonHTMLAttributes} from 'react'
 
 export function Button(props:ButtonHTMLAttributes){
     return (
         <button className='button' {...props} />
     )
 }