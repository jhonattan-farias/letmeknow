import copyImg from '../assets/copy.svg'

export function RoomCode(){
    return(
        <button className="room-code">
          <div><img src={copyImg} alt="copiar room code" /></div>
            <span>-dfgvsa</span>
        </button>
    )
}