import { useState } from 'react'
import {useParams} from 'react-router-dom'

import logoImg from '../assets/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { useAuth } from '../hooks/useAuth'

import '../styles/room.scss'

interface RoomParams{
    id:string;
}

export function Room(){
    const params = useParams<RoomParams>()
    const {user} = useAuth()
    const [newQuestion,setNewQuestion] = useState('')

    async function handleSendNewQuestion(){
        if(newQuestion.trim() === ''){
            return
        }
        if(!user){
            throw new Error("you must be logged")
        }

    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeknow" />
                    <RoomCode code={params.id} />
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
            onChange={e => setNewQuestion(e.target.value)}
            value={newQuestion}
            />
            <div className="form-footer">
                <span>parar enviar uma pergunta faça seu 
                    <button>login</button>
                </span>
                <Button type='submit'>Enviar pergunta</Button>
            </div>
        </form>
            </main>
        </div>
    )
}