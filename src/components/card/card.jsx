import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons/faAppleAlt"
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine"
import { faCarrot } from "@fortawesome/free-solid-svg-icons/faCarrot"
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools"
import { faTasks } from "@fortawesome/free-solid-svg-icons/faTasks"
import { faStethoscope } from "@fortawesome/free-solid-svg-icons/faStethoscope"
import { faFootball } from "@fortawesome/free-solid-svg-icons/faFootball"

export function Card() {

    return (
        <div className="flex flex-col gap">
            <h1 className="flex items-center justify-center mt-1">O que fazemos?</h1>
            
            <div className="flex flex-col mt-10 gap-7 lg:flex-row mt-14">
                <div className="hover:-translate-x-2 transition-all meu-text gap-6 bg-blue-500 w-72 rounded-2xl px-5 flex items-center justify-center flex-col h-64">
                    <FontAwesomeIcon className="items-center justify-center text-white h-14" icon={faAppleAlt} />
                    <h2 className="text-xl text-white">Emagrecimento</h2>
                </div>

                <div className="meu-text hover:-translate-y-2 transition-all gap-6 w-72 bg-blue-500 rounded-2xl px-5 flex items-center justify-center flex-col h-64">
                    <FontAwesomeIcon className="items-center justify-center text-white h-14" icon={faChartLine} />
                    <h2 className="text-xl text-white">Bulking</h2>
                </div>

                <div className="meu-text hover:translate-x-2 transition-all gap-6 w-72 bg-blue-500 rounded-2xl px-5 flex items-center justify-center flex-col h-64">
                    <FontAwesomeIcon className="items-center justify-center text-white h-14" icon={faCarrot} />
                    <h2 className="text-xl text-white">Cutting</h2>
                </div>

                <div className="meu-text gap-6 w-72 bg-blue-500 rounded-2xl px-5 flex items-center justify-center flex-col h-64 md:hidden">
                    <FontAwesomeIcon className="items-center justify-center text-white h-14" icon={faTools} />
                    <h2 className="text-xl text-white">BodyBuilder</h2>
                </div>
            </div>
            
            <div className="lg:flex flex-row mt-6 gap-7 hidden md:inline">
                <div className="meu-text hover:-translate-x-2 transition-all gap-6 bg-blue-500 w-72 rounded-2xl px-5 flex items-center justify-center flex-col h-64">
                    <FontAwesomeIcon className="items-center justify-center text-white h-14" icon={faTasks} />
                    <h2 className="text-xl text-white">Acompanhamento</h2>
                </div>

                <div className="meu-text hover:translate-y-2 transition-all gap-6 w-72 bg-blue-500 rounded-2xl px-5 flex items-center justify-center flex-col h-64">
                    <FontAwesomeIcon className="items-center justify-center text-white h-14" icon={faStethoscope} />
                    <h2 className="text-xl text-white">Nutrição Infantil</h2>
                </div>

                <div className="meu-text hover:translate-x-2 transition-all gap-6 w-72 bg-blue-500 rounded-2xl px-5 flex items-center justify-center flex-col h-64">
                    <FontAwesomeIcon className="items-center justify-center text-white h-14" icon={faFootball} />
                    <h2 className="text-xl text-white">Nutrição Esportiva</h2>
                </div>

                <div className="meu-text gap-6 w-72 bg-blue-500 rounded-2xl px-5 flex items-center md:hidden justify-center flex-col h-64">
                    <FontAwesomeIcon className="items-center justify-center text-white h-14 " icon={faTools} />
                    <h2 className="text-xl text-white">BodyBuilder</h2>
                </div>
            </div>

        </div>
    )
}

export default Card