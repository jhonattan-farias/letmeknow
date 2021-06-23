import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as duvidas de sua audiencia em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="letmeask" />
                    <button>
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        
                    </form>
                </div>
            </main>
        </div>
    )
}