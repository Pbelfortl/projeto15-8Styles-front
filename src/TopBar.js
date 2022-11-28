import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import AuthContext from "./contexts/authContext"
import Login from "./Login"
import SignUp from "./Sign-up"
import Logo from "./images/Logo.png"

export default function TopBar() {
    const navigate = useNavigate()

    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    const { setToken } = useContext(AuthContext)

    function logout() {
        localStorage.removeItem("token");
        //localStorage.removeItem("userName");
        setToken("");
        alert("Logout efetuado com sucesso!")
        navigate("/")
        //setUserName("");
    }


    return (
        <>
            <Bar>
                <img src={Logo}/>
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
                    <ion-icon name="cart-outline" onClick={() => navigate("/carrinho")}></ion-icon>
                    <ion-icon name="exit-outline" onClick={logout}></ion-icon>
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
    img{
        width: 50px;
        height: 50px;
        margin-left: 150px;
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