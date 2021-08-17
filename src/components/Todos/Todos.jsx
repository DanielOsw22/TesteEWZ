import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Todos.css'

export default function Todos() {
    const [arr, setArr] = useState([])
    const [user, setUser] = useState([])

    const {userID} = useParams()

    const getData = async () => {
        const testeArr = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data
        const testeUser = (await axios.get('https://jsonplaceholder.typicode.com/users')).data

        setArr(testeArr)
        setUser(testeUser)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className="todoMain">
            <h1 className="todoTitle">Todos os Todo's</h1>
            <div className="todoItems">
                {arr ? arr.map(el =>
                    <div className="todoItem" style={!userID?{}:+userID===+el.userId?{}:{display:'none'}}>
                        <div className="completed" style={el.completed ? { backgroundColor: "green" } : { backgroundColor: "blue" }}>____</div>
                        <h3>Título: {el.title}</h3>
                        <p>User: {user.length? user.filter(elem=>elem.id===el.userId)[0].name : "Não Encontrado"}</p>
                    </div>
                ) : <h1>loading</h1>}
            </div>
        </section>
    )

}