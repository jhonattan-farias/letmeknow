import logoImg from '../assets/logo.svg'
import { Button } from '../components/Button'

import from 'styles'

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
            <textarea 
            placeholder="o que você quer perguntar?"
            />
            <div className="form-footer">
                <span>parar enviar uma pergunta faça seu <button>login</button></span>
                <Button type='submit'>Enviar pergunta</Button>
            </div>
        </form>
            </main>
        </div>
    )
}