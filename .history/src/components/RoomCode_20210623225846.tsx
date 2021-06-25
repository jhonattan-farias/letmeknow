import copyImg from '../assets/copy.svg'

export function RoomCode(){
    return(
        <button className="room-code">
          <div><img src={copy} alt="" /></div>
        </button>
    )
}