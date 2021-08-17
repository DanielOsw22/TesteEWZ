import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Users.css'
import {
    Link
  } from "react-router-dom";

export default function Users() {

    const [users, setUser] = useState([])
    const getUsers = async () => {
        setUser(await axios.get('https://jsonplaceholder.typicode.com/users'))
    }

    useEffect(() => getUsers(), [])

    return (
            <section className="usersMain">
                <h1 className="usersTitle">Todos Users</h1>
                <div className="usersList">
                    {users.data ? users.data.map(el =>
                        <div className="usersItem">
                            <h3>Nome: {el.name}</h3>
                            <h4>Username: {el.username}</h4>
                            <h4>Email: {el.email}</h4>
                            <Link to={`/${el.id}`} className="btnUser">Verificar afazeres</Link>
                        </div>
                    ) : "loading"}
                </div>

            </section>
    )
}