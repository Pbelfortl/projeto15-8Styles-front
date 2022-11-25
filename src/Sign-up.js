import { useState } from "react";
import styled from "styled-components"
import axios from "axios";


export default function SignUp({ showSignUp, setShowSignUp, setShowLogin }) {

    const URL = "http://localhost:5000/sign-up"
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmedPass: "" });

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
            setShowSignUp(false);
            const emptyInput = { name: "", email: "", password: "", confirmedPass: "" }
            setForm(emptyInput)
        } catch (error) {
            alert(error.response.data.message);
        }

    }

    return (
        <SingUpComponent showSignUp={showSignUp}>
            <form onSubmit={sendRegistration}>
                <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleForm}
                    placeholder="Nome"
                    required>
                </input>
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
                <input
                    name="confirmedPass"
                    type="password"
                    value={form.confirmedPass}
                    onChange={handleForm}
                    placeholder="Confirme a senha"
                    required>
                </input>
                <button type="submit">Cadastrar</button>
            </form>
            <button onClick={() => {
                setShowSignUp(!showSignUp)
                setShowLogin(false)
            }}>Cancelar</button>

        </SingUpComponent>
    )
}

const SingUpComponent = styled.div`
    position: fixed;
    display: ${props => props.showSignUp === true ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 60px;
    right: 60px;
    height: 40vh;
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