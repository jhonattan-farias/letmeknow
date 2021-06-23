import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'

import { Button } from '../components/Button'
import '../styles/auth.scss'

export function NewRoom() {
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as duvidas de sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="letmeask" />
                    
                    <form>
                        <input 
                            type="text" 
                            placeholder='digite o codigo da sala'
                        />
                        <button type="submit">entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}