import { useState } from 'react'
import {useParams} from 'react-router-dom'

import logoImg from '../assets/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

import '../styles/room.scss'

interface RoomParams{
    id:string;
}

export function Room(){
    const params = useParams<RoomParams>()
    const {user} = useAuth()
    const [question,setQuestion] = useState('')

    async function handleSendNewQuestion(){
        if(question.trim() === ''){
            return
        }
        if(!user){
            throw new Error("you must be logged")
        }

        const newQuestion ={
            content:question,
            author:{name:user.name,
            avatar:user.avatar,
            },
            isHighlated:false,
            isAnswered:false
        }

        await database.ref()

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
            onChange={e => setQuestion(e.target.value)}
            value={question}
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