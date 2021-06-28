import { useState } from 'react'
import {useHistory, useParams} from 'react-router-dom'

import logoImg from '../assets/logo.svg'
import deleteImg from '../assets/delete.svg'
import answerImg from '../assets/answer.svg'
import checkImg from '../assets/check.svg'

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

export function AdminRoom(){
    const history = useHistory()
    const params = useParams<RoomParams>()
    const {user} = useAuth()
    const [question,setQuestion] = useState('')
    const roomId = params.id
    const {questions,title} = useRoom(roomId)

    async function handleEndRoom(){
        await database.ref(`rooms/${roomId}`).update({
            endedAt:new Date()
        })
        history.push('/')
    }

    async function handleDeleteQuestion(questionId:string){
        if(window.confirm('tem certeza?')){
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeknow" />
                    <div>
                        <RoomCode code={params.id} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
                    </div>
                </div>

            </header>
            <main className='content'>
        <div className="room-title">
            <h1>Sala {title}</h1>
            {questions.length > 0 ? <span>{questions.length} pergunta</span>:<span>{questions.length} perguntas</span>}
        </div>
            <div className="question-list">
            {questions.map(question => {
            return (
                <Question 
                    key={question.id}
                    content={question.content}
                    author={question.author}
            >
                <button
                    type='button'
                    onClick={() => handleDeleteQuestion(question.id)}
                >
                    <img src={answerImg}/>

                </button>
                <button
                    type='button'
                    onClick={() => handleHighlight(question.id)}
                >
                    <img src={checkImg}/>

                </button>
                <button
                    type='button'
                    onClick={() => handleDeleteQuestion(question.id)}
                >
                    <img src={deleteImg}/>

                </button>
            </Question>
                )
            })}
            </div>   
        
            </main>
        </div>
    )
}