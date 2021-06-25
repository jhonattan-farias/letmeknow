import copyImg from '../assets/copy.svg'

import '../styles/roomCode.scss'

interface RoomCodeProps{
    code:string
}

export function RoomCode(props:RoomCodeProps){
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code)
    }
    return(
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
          <div><img src={copyImg} alt="copiar room code" /></div>
            <span>Sala ${props.code}</span>
        </button>
    )
}