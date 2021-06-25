
import '../styles/question.scss'

interface QuestionProps{
    content:string
    author:{
        name:string
        avatar:string
    }
}

export function Question({content,author}:QuestionProps){
    return (
        <div className="ques">
            <p>
                {content}
            </p>
            footer
        </div>
    )
}