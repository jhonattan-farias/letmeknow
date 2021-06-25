import { FormEvent, useEffect, useState } from 'react'
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

interface Questions{
    author:{
        name:string
        avatar:string
    }
    content:string
    isAnswered:boolean
    isHighlated:boolean
    id:string
}

type QuestionProps = Record<string,{
    author:{
        name:string
        avatar:string
    }
    content:string
    isAnswered:boolean
    isHighlated:boolean
}>

export function Room(){
    const params = useParams<RoomParams>()
    const {user} = useAuth()
    const [question,setQuestion] = useState('')
    const [questions,setQuestions] = useState<Questions[]>([])
    const [title,setTitle] = useState('')
    const roomId = params.id

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`)

        roomRef.on('value',room => {
            const questionRoom = room.val()
            const firebaseQuestions = questionRoom.questions as QuestionProps ?? {}

            const parsedQuestions =  Object.entries(firebaseQuestions).map(([key,value]) => {
                return{
                    id:key,
                    content:value.content,
                    author:value.author,
                    isHighlated:value.isHighlated,
                    isAnswered:value.isAnswered
                }
            })
            setTitle(questionRoom.title)
            setQuestions(parsedQuestions)
        })
    },[roomId])

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

        {questions.map(question => {
            return
        })}
            </main>
        </div>
    )
}