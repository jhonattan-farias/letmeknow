import {useParams} from 'react-router-dom'

import logoImg from '../assets/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'

import '../styles/room.scss'

export function Room(){

    const params = useParams()

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
            <h1>Sala React</h1>
            <span>4 perguntas</span>
        </div>
        <form >
            <textarea 
            placeholder="o que você quer perguntar?"
            />
            <div className="form-footer">
                <span>parar enviar uma pergunta faça seu 
                    <button>login</button>
                </span>
                <Button type='submit'>Enviar pergunta</Button>
            </div>
        </form>
            </main>
        </div>
    )
}