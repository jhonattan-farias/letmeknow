import copyImg from '../assets/copy.svg'

import '../styles/roomCode.scss'

export function RoomCode(){
    function copyRoomCodeToClipboard(){
        navigator
    }

    return(
        <button className="room-code">
          <div><img src={copyImg} alt="copiar room code" /></div>
            <span>-dfgvsa</span>
        </button>
    )
}