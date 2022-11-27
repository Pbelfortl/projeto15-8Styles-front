import { useState } from "react"
import styled from "styled-components"
import Login from "./Login"
import SignUp from "./Sign-up"

export default function TopBar() {

    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    return (
        <>
            <Bar>
                <input placeholder="Pesquisar"></input>
                <Account>
                    <button onClick={() => {

                        if (showSignUp) {
                            setShowSignUp(false)
                            return
                        }

                        setShowSignUp(true)
                        setShowLogin(false)
                    }}>Cadastre-se</button>
                    <button onClick={() => {

                        if (showLogin) {
                            setShowLogin(false)
                            return
                        }

                        setShowSignUp(false)
                        setShowLogin(true)
                    }}>Entrar</button>
                    <ion-icon name="cart-outline"></ion-icon>
                    <ion-icon name="exit-outline"></ion-icon>
                </Account>
            </Bar>
            <Login showLogin={showLogin} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
            <SignUp showSignUp={showSignUp} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />   
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