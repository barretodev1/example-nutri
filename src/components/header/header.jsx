import Logo from '../../assets/logoo-removebg-preview.webp'

export function Header() {

    return ( 
        <header className='h-16 border-b-0 border-black'>
        <img className='h-16 p-2' src={Logo} alt="" />
       </header>
    )
}

export default Header