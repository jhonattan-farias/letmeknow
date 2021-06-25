import logoImg from '../assets/logo.svg'

export function Room(){
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeknow" />
                    <div>codigo</div>
                </div>

            </header>
            <main className='content'>
        <div className="room-title">
            <h1>Sala React</h1>
            <span>4 perguntas</span>
        </div>
        <form >
            <textarea>
                
            </textarea>
        </form>
            </main>
        </div>
    )
}