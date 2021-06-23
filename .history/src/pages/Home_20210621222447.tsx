import illustrationImg from '../assets/illustration.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&A as</strong>
            </aside>
        </div>
    )
}