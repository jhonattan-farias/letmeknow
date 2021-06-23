import { useState } from 'react'
import { FormEvent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextProvider'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

import { Button } from '../components/Button'
import '../styles/auth.scss'

export function NewRoom() {
    const {user} = useContext(AuthContext)
    const [input,setInput] = useState('')

    function createRoom(e:FormEvent){
        e.preventDefault()

        if(input.trim() === ''){
            return
        }

        
    }

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
                    <h2>{user.name}</h2>
                    <form onSubmit={createRoom}>
                        <input 
                            type="text" 
                            placeholder='nome da sala'
                            onChange={e => setInput(e.target.value)}
                        />
                        <Button type="submit">Criar Sala</Button>
                    </form>
                    <p>quer entrar em uma sala existente? <Link to="/">clique aqui</Link> </p>
                </div>
            </main>
        </div>
    )
}