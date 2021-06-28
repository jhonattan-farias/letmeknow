
import { ReactNode } from 'react'

import '../styles/question.scss'
interface QuestionProps{
    content:string
    author:{
        name:string
        avatar:string
    }
    children?:ReactNode
    isAnswered:boolean
    ishighlated:boolean
}

export function Question({
    content,
    author,
    children,
    isAnswered,
    ishighlated
}:QuestionProps){
    return (
        <div className={`question ${ishighlated ? 'highlated' : ''} ${}`}>
            <p>
                {content}
            </p>
            <footer> 
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>{children}</div>
            </footer> 
        </div>
    )
} 