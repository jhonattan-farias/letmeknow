import { FormEvent, useState } from 'react'
import {useParams} from 'react-router-dom'

import logoImg from '../assets/logo.svg'
import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { RoomCode } from '../components/RoomCode'
import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'
import { database } from '../services/firebase'

import '../styles/room.scss'

interface RoomParams{
    id:string;
}

export function Room(){
    const params = useParams<RoomParams>()
    const {user} = useAuth()
    const [question,setQuestion] = useState('')
    const roomId = params.id
    const {questions,title} = useRoom(roomId)


    async function handleSendNewQuestion(e:FormEvent){
        e.preventDefault()
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

        await database.ref(`rooms/${roomId}/questions`).push(newQuestion)
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
            <h1>Sala {title}</h1>
            {questions.length > 0 ? <span>{questions.length} pergunta</span>:<span>{questions.length} perguntas</span>}
        </div>
        <form onSubmit={handleSendNewQuestion}>
            <textarea 
            placeholder="o que você quer perguntar?"
            onChange={e => setQuestion(e.target.value)}
            value={question}
            />
            <div className="form-footer">
                {
                    user 
                    ?
                    <div className="user-info">
                        <img src={user.avatar} alt={user.name} />
                        <span>{user.name}</span>
                    </div>
                    :
                    <span>parar enviar uma pergunta faça seu 
                    <button>login</button>
                </span>
                }
                <Button type='submit' disabled={!user}>Enviar pergunta</Button>
            </div>
        </form>
            <div className="question-list">
            {questions.map(question => {
            return (
                <Question 
                    key={question.id}
                    content={question.content}
                    author={question.author}
            ></Q
                )
            })}
            </div>   
        
            </main>
        </div>
    )
}