import copyImg from '../assets/copy.svg'

import '../styles/roomCode.scss'

interface RoomCodeProps{
    code:string
}

export function RoomCode({code}:RoomCodeProps){
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText()
    }

    return(
        <button className="room-code">
          <div><img src={copyImg} alt="copiar room code" /></div>
            <span>-dfgvsa</span>
        </button>
    )
}