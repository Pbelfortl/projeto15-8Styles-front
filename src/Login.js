import { useContext, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import AuthContext from "./contexts/authContext";
import BASE_URL from "./constants/url";



export default function Login({ showLogin, setShowLogin, setShowSignUp }) {
    const {token, setToken } =  useContext(AuthContext)
    const [form, setForm] = useState({ email: "", password: "" });

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
            const promise = await axios.post(`${BASE_URL}/sign-in`, body)
            setShowLogin(false)
            console.log(promise.data.token);
            setToken(promise.data.token);
            localStorage.setItem("token", JSON.stringify(promise.data.token));

            const emptyInput = { email: "", password: "" }
            setForm(emptyInput)
            alert("Login efetuado com sucesso")
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
    height: 25vh;
    width: 320px;
    background-color: black;
    opacity: 0.9;
    border-radius: 8px;
    z-index: 1;
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