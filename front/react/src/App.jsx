import { useState } from 'react'
import './App.css'

export default function App(){
  
  const [theme, setTheme] = useState(true)
  const [count, setCount] = useState(0)
  const [senai, setSenai] = useState("") 

  if(senai == "SENAI_") {
    var palavra='SENAI!!!'
}
  
  return (
    <>
        {/* contador */}
        <div className="atividadeB">
        <button onClick={() => setCount((count) => count + 1)}>Adicionar {count}</button>
        </div>

        <div className="atividadeB">
        <button onClick={() => setCount((count) => count - 1)}>Remover {count}</button>
        </div>

        {/* palavra SENAI!!! */}
        <div>
        <input type="text" onChange={(e) => setSenai(e.target.value)} />
        <h1>{palavra}</h1>
        </div>

        {/* //  trocar de branco para preto */}
       <button onClick={() => setTheme(theme ? false : true)}>TROCAR TEMA</button>
       {theme ?
      
        <div className='branco'>/</div>
        :
        <div className='preto'>/</div>
      }
    </>
  )
}