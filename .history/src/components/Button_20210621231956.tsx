 interface BUttonProps{
     type:string
 }
 
 export function Button(props){
     return (
         <button className='button' {...props} />
     )
 }