 interface ButtonProps{
     type:string;
 }
 
 export function Button(props:Button){
     return (
         <button className='button' {...props} />
     )
 }