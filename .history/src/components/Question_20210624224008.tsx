
import '../styles/question.scss'

interface QuestionProps{
    content:string
    author:{
        name:string
        avatar:string
    }
}

export function Question({content}:QUestionProps){
    return (
        <div className="ques">
            <p>

            </p>
        </div>
    )
}