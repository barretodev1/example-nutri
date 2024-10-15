import Image from '../../assets/logoo-removebg-preview.webp'
import '../../header.css'

export function HeaderPC() {

    return (
        <header className='flex flex-row justify-between h-20'>
            <figure>
                <img className='h-20' src={Image} alt="" />
            </figure>

            <div className='flex flex-row px-4 meu-text'>
                <ul className='flex flex-row text-center items-center justify-center gap-5 text-sm'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#local">Local</a></li>
                    <li><a href="#local">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}