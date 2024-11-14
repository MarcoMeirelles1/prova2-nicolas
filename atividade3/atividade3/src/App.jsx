import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
    {/* NavBar  */}
      <div className='NavBar'>
      </div>
{/* sections*/}
      <section id='section01'>
        <div className='foto'>
          {/* imagem de perfil */}
          <img src="https://i.pinimg.com/474x/81/04/cd/8104cd58640b51ba9753572be7e59f0e.jpg" alt="imagem massa" width={400} height={400} />
        </div>
        {/* Informações do usuario*/}
        <div className='nomeDireita'>
          <h1>Nome do usuario</h1>
          <p>Sua profissão - função</p>
        </div>
      </section>
      <section id='section02'>
        {/*classe pai e as outras filhas  */}
        <div className="container">
            <div className='esquerda'>
              <h1>
                Info
              </h1>
              <p className='infoEsquerda'>
                <br /> 9899988989 <br />
                <br /> umemailqualquer@gmail.com <br />
                <br />N545545 <br />
              </p>
            </div>
            <div className='direita'>
              <h1>
                Equipe
              </h1>
              <p className='infoDireita'>
                  <br />Nome <br />
                  <br />Nome <br />
                  <br />Nome <br />
                  <br />Funcoes <br />
                  <br />Funcoes <br />
                  <br />Funcoes <br />
              </p>
            </div>
          </div>
      </section>
    </>
  )
}

export default App