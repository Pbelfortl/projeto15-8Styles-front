import { useState } from "react";
import styled from "styled-components"
import axios from "axios";



export default function Login({ showLogin, setShowLogin, setShowSignUp }) {

    const [form, setForm] = useState({ email: "", password: "" });
    const URL = "http://localhost:5000/sign-in"

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    async function sendRegistration(e) {
        e.preventDefault();

        const body = {
            ...form
        }

        console.log(body);


        try {
            await axios.post(URL, body);
            setShowLogin(false)

            const emptyInput = { email: "", password: "" }
            setForm(emptyInput)
        } catch (error) {
            console.log(error);
            alert("email e/ou senha incorretos")
        }

    }

    return (
        <Logincomponent showLogin={showLogin}>
            <form  onSubmit={sendRegistration}>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleForm}
                    placeholder="E-mail"
                    required>
                </input>
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleForm}
                    placeholder="Senha"
                    required>
                </input>
                <button type="submit">Entrar</button>
            </form>
            <button onClick={() => {
                setShowLogin(!showLogin)
                setShowSignUp(false)
            }}>Cancelar</button>
        </Logincomponent>
    )
}

const Logincomponent = styled.div`
    position: fixed;
    display: ${props => props.showLogin === true ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 60px;
    right: 60px;
    height: 20vh;
    width: 20vw;
    background-color: grey;
    opacity: 0.7;
    border-radius: 8px;
    form{
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    input{
        width: 250px;
        height: 25px;
        margin: 10px;
    }
    button{
        background-color: none;
        border: none;
        margin: 10px;
        border-radius: 5px;
    }
`