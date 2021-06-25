import { useState } from "react"

export function useRoom(){
    const [questions,setQuestions] = useState<Questions[]>([])
    const [title,setTitle] = useState('')
}