
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
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text" 
                            placeholder='nome da sala'
                        />
                        <Button type="submit">Criar Sala</Button>
                    </form>
                    <p>quer entrar em uma sala existente? <a href="#">clique aqui</a> </p>
                </div>
            </main>
        </div>
    )
}