import { useState } from "react"


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
export function useRoom(){
    const [questions,setQuestions] = useState<Questions[]>([])
    const [title,setTitle] = useState('')
}