import React, { useEffect, useState } from 'react'
import Posts from './src/components/Posts'
import { } from './style.css'

function App() {

    const [datos, setDatos] = useState([])

    useEffect(() => {
        fetchDatos()
    }, [])

    async function fetchDatos() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        setDatos(data)
    }

    if (datos.length == 0) {
        return <div className="loader">Loading
            <span></span>
        </div>
    }

    window.addEventListener('scroll', scrollear)

    function scrollear(){
        let cards = document.querySelectorAll(".card");
        cards.forEach(elem =>{
            if(elem.offsetTop < window.scrollY + 400){
                elem.classList.add('active')
            }else{
                elem.classList.remove('active')
            }
        })
    }

    return (
        <div className='App'>
            <h1 className='mb-4'>Scrollea hacia abajo ⬇</h1>
            <Posts inicio={0} fin={9} lista={datos} color={"bg-violet-700"} section={1} clase='active'/>
            <Posts inicio={9} fin={24} lista={datos} color={"bg-red-400"} section={2} />
            <Posts inicio={24} fin={42} lista={datos} color={"bg-green-500"} section={3} />
        </div>
    )
}

export default App