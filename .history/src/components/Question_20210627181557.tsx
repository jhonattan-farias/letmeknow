
import '../styles/question.scss'

interface QuestionProps{
    content:string
    author:{
        name:string
        avatar:string
    }
    childre:
}

export function Question({
    content,
    author,
props}:QuestionProps){
    return (
        <div className="question">
            <p>
                {content}
            </p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>{props}</div>
            </footer>
        </div>
    )
}