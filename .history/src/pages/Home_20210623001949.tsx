import {useHistory} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'

import { Button } from '../components/Button'
import '../styles/auth.scss'
import { useState } from 'react'

export function Home() {
    const history = useHistory()
    const {signInWithGoogle,user} = useAuth()
    const [input,setInput] useState('')

    const handleCreateNewRoom = async () => {
        if(!user){
          await signInWithGoogle()
        }
         history.push('/rooms/new')
    }

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
                    <Button className='create-room' onClick={handleCreateNewRoom}>
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com google
                    </Button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder='digite o codigo da sala'
                            onChange={e => setInput()}
                        />
                        <button type="submit">entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}