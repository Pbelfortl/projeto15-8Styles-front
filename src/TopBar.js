import { useState } from "react"
import styled from "styled-components"


export default function TopBar () {

    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    return (
        <>
        <Bar>
            <input placeholder="Pesquisar"></input>
            <Account>
                <button onClick={() => {
                    setShowSignUp(true)
                    setShowLogin(false)
                    }}>Cadastre-se</button>
                <button onClick={() => {
                    setShowSignUp(false)
                    setShowLogin(true)}}>Entrar</button>
                <ion-icon name="cart-outline"></ion-icon>
                <ion-icon name="exit-outline"></ion-icon>
            </Account>
        </Bar>
        <Login showLogin={showLogin}>
            <form>
                <input></input>
                <input></input>
                <button>Entrar</button>
            </form>
            <button onClick={() => {
                setShowLogin(!showLogin)
                setShowSignUp(false)
                }}>Cancelar</button>
        </Login>
        <SignUp showSignUp={showSignUp}>
            <form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <button>Cadastrar</button>
            </form>
            <button onClick={() => {
                setShowSignUp(!showSignUp)
                setShowLogin(false)
                }}>Cancelar</button>
        </SignUp>
        </> 
    )
}

const Bar = styled.div`
    box-sizing: border-box;
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    right: 0;
    width: 95vw;
    height: 60px;
    background-color: #FFFFFF;
    padding: 15px;
    input{
        outline: none;
        margin-left: 100px;
        height: 30px;
        width: 250px;
    }
`
const Account = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    button{
        width: 100px;
        height: 30px;
        margin-left: 20px;
        border: none;
        cursor: pointer;
    }
    ion-icon{
        width: 40px;
        height: 40px;
        margin-left: 20px;
        cursor: pointer;
    }
`
const Login = styled.div`
    position: fixed;
    display: ${props => props.showLogin===true ? 'flex' : 'none'};
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

const SignUp = styled.div`
    position: fixed;
    display: ${props => props.showSignUp===true ? 'flex' : 'none'};
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