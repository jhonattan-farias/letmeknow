import { useEffect, useState } from "react"
import { database } from "../services/firebase"


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
    likes:Record<string,{
        authorId:string
    }>
}>

export function useRoom(roomId:string){
    const [questions,setQuestions] = useState<Questions[]>([])
    const [title,setTitle] = useState('')

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
                    isAnswered:value.isAnswered,
                    likeCount:Object.values(value.likes ?? {}).length,
                    hasLikes:Object.values(values.likes ?? {}).some
                }
            })
            setTitle(questionRoom.title)
            setQuestions(parsedQuestions)
        })
    },[roomId])

    return {title,questions}
}