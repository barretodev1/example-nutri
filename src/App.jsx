import { useState } from 'react';
import Header from './components/header/header.jsx';
import Image from './assets/Eating healthy food-pana.svg';
import './header.css';
import { HeaderPC } from './components/headerPC/headerpc.jsx';
import Card from './components/card/card.jsx'
import CardLoc from './components/card/cardLoc.jsx';

function App() {
  return (
    <>
    {/* HOME PAGE */}
    <section id='home' className='h-full'>
      <div className='md:hidden'>
        <Header></Header>
      </div>

        <div className='meu-text flex flex-col items-center justify-center border-t md:hidden'>
          <h1 className='mt-5 text-lg font-bold'>TRANSFORME SEU CORPO</h1>
      
          <h2 className='mt-1 text-xs text-center'>
            CANSOU DE SEMPRE TENTAR E NÃO CONSEGUIR?<br />
            CLIQUE NO BOTÃO <span className="text-blue-500 font-extrabold">AZUL</span> ABAIXO, E MUDE DE VIDA.
          </h2>

          
        </div>
        
        <figure className='mt-5 flex items-center justify-center md:hidden'>
          <img className='h-80' src={Image} alt="Comida saudável" />
        </figure>

        <div className='meu-button flex items-center justify-center mt-6 md:hidden'>
          <a className='px-6 h-10 flex items-center justify-center rounded-2xl text-white text-xs bg-blue-500' href="https://wa.me/5511933255476?text=Ol%C3%A1!%20Tudo%20bem%3F">ENTRE EM CONTATO</a>
        </div>



        {/* FOR PC */}
        <div className='hidden md:block'>
          <HeaderPC></HeaderPC>
          <div className='flex justify-between items-center flex-row px-14 border-t'>
            <div className='meu-text-pc'>
              <h1 className='text-2xl'>TRANSFORME SEU CORPO</h1>
              <h3 className='text-xl font-thin'> Cansou de sempre tentar e não conseguir?<br />
              Clique no botão <span className="text-blue-500 font-extrabold">AZUL</span> abaixo, e mude de vida.</h3>
              <a className='h-12 w-60 mt-4 text-xs flex items-center justify-center rounded-2xl text-white bg-blue-500' href="https://wa.me/5511933255476?text=Ol%C3%A1!%20Tudo%20bem%3F">ENTRE EM CONTATO</a>            
            </div>
          

            <figure>
              <img className='h-96' src={Image} alt="" />
            </figure>
          </div>
        </div>

    </section>

    {/* LEARN MORE */}
    <section id='sobre' className='flex flex-col items-center justify-center mt-28 lg:mt-32 text-xl lg:text-3xl meu-text'>
      <div>
        <h1 className='text-blue-600'>SAIBA MAIS</h1>
      </div>

      <div>
        <Card/>
      </div>
      
    </section>    

    {/* LOCAL */}
    <section id='local' className='flex items-center justify-center flex-col mt-28 meu-text'> 
      <div className='flex items-center justify-center'>
        <h1 className='text-3xl text-blue-600'>ONDE ESTAMOS?</h1>
      </div>

      <div className='flex items-center mt-10 flex-col w-full meu-text-pc'>
        <iframe className='lg: w-2/3' src="https://www.google.com.br/maps/embed?pb=!1m18!1m12!1m3!1d14640.586959135325!2d-46.4302446!3d-23.487226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63b8abd4c3c7%3A0x7b3b4099ed7e7a3d!2sR.%20Salvador%20Fernandes%20Cardia%2C%20Jardim%20Helena%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008081-170!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" frameborder="0"></iframe>
        <div className='flex w-2/3 mt-5'>
          <CardLoc/>
        </div>        
      </div>
    </section>

    {/* FOOTER */}
    <section id='contato' className='flex flex-col justify-center mt-10 hidden md:block'>
    <footer className="bg-blue-600 text-white py-8 flex justify-center">
      <div className="flex flex-row gap-40 justify-center grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna de Serviços */}
        <div className='footer'>
          <h3 className="font-bold mb-4">Serviços</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Nutrição Infantil</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Nutrição Esportiva</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Planos Alimentares</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Acompanhamento Personalizado</a></li>
          </ul>
        </div>

        {/* Coluna de Contato */}
        <div className='footer'>
          <h3 className="font-bold mb-4">Contato</h3>
          <ul>
            <li className="mb-2"><a href="mailto:exemplo@dominio.com" className="hover:text-gray-400">Email: exemplo@dominio.com</a></li>
            <li className="mb-2"><a href="tel:+5511999999999" className="hover:text-gray-400">Telefone: (11) 99999-9999</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Endereço: Rua Exemplo, 123</a></li>
          </ul>
        </div>

        {/* Coluna de Redes Sociais */}
        <div className='footer'>
          <h3 className="font-bold mb-4">Redes Sociais</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>   
    </section>

    {/* FOOTER MOBILE */}
    <section className='mt-8 md:hidden'>
    <footer className="bg-blue-600 text-white py-8 px-7">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna de Serviços */}
        <div className='meu-footer'>
          <h3 className="font-bold mb-4">Serviços</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Consulta Nutricional</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Planos Alimentares</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Acompanhamento Personalizado</a></li>
          </ul>
        </div>

        {/* Coluna de Contato */}
        <div className='meu-footer'>
          <h3 className="font-bold mb-4">Contato</h3>
          <ul>
            <li className="mb-2"><a href="mailto:exemplo@dominio.com" className="hover:text-gray-400">Email: exemplo@dominio.com</a></li>
            <li className="mb-2"><a href="tel:+5511999999999" className="hover:text-gray-400">Telefone: (11) 99999-9999</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Endereço: Rua Exemplo, 123</a></li>
          </ul>
        </div>

        {/* Coluna de Redes Sociais */}
        <div className='meu-footer'>
          <h3 className="font-bold mb-4">Redes Sociais</h3>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
          </ul>
        </div>
      </div>

  
    </footer>
    </section>
    </>
  );
}

export default App;
