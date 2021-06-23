import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

import { Button } from '../components/Button'
import '../styles/auth.scss'

export function NewRoom() {
    const {user} = useContext(AuthContext)
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong></strong>
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
                    <p>quer entrar em uma sala existente? <Link to="/">clique aqui</Link> </p>
                </div>
            </main>
        </div>
    )
}