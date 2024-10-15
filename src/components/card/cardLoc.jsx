import './card.css'
import { faCertificate } from "@fortawesome/free-solid-svg-icons/faCertificate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export function CardLoc() {

    return (
        <>
            <div className='flex flex-col gap-4'>
                <div className="meu-icon flex flex-row items-center gap-3">
                    <FontAwesomeIcon icon={faCertificate} className="h-6" />
                    <p className="text-xl">Bem localizado</p>
                </div>
                <div className="meu-icon flex flex-row items-center gap-3">
                    <FontAwesomeIcon icon={faCertificate} className="h-6" />
                    <p className="text-xl">Ambiente tranquilo</p>
                </div>
                <div className="meu-icon flex flex-row items-center gap-3">
                    <FontAwesomeIcon icon={faCertificate} className="h-6" />
                    <p className="text-xl">Estacionamento</p>
                </div>
                <div className="meu-icon flex flex-row items-center gap-3">
                    <FontAwesomeIcon icon={faCertificate} className="h-6" />
                    <p className="text-xl">Seguro</p>
                </div>
                <div className="meu-icon flex flex-row items-center gap-3">
                    <FontAwesomeIcon icon={faCertificate} className="h-6" />
                    <p className="text-xl">Próximo a estação</p>
                </div>
            </div>
        </>
    )
}

export default CardLoc