import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import BASE_URL from "./constants/url.js"
import { Navigate, useNavigate } from "react-router-dom"


export default function Checkout () {

    const naviagte = useNavigate()
    const [name, setName] = useState()
    const [CEP, setCEP] = useState()
    const [payment, setPayment] = useState()


    function confirmBuy (event) {

        const purchaseInfo = {
            name:name,
            CEP:CEP,
            paymentType:payment,
        }

        event.preventDefault()
        axios.post(`${BASE_URL}/purchase`, {
            name:name,
            CEP:CEP,
            paymentType:payment,})
            .then(ans => {
                alert("Compra concluída com sucesso")
                Navigate("/")})
            .catch(alert("Ocorreu um, erro. Tente novamente mais tarde"))

    }


    return(
        <CheckoutScreen>
            <form onSubmit={confirmBuy}>
                <input placeholder="Nome" onChange={ e => setName(e.target.value)}/>
                <input placeholder="CEP" onChange={ e => setCEP(e.target.value)}/>
                <div>
                    <input  type="radio" id="cartao" value="cartao" name="payment" onChange={e => setPayment(e.target.value)}/>
                    <label htmlFor="cartao">Cartão</label>
                    <input  type="radio" id="boleto" name="payment" value="boleto" onChange={e => setPayment(e.target.value)}/>
                    <label htmlFor="boleto">Boleto</label>
                    <input  type="radio" id="pix" name="payment" value="pix" onChange={e => setPayment(e.target.value)}/>
                    <label htmlFor="pix">Pix</label>
                </div>
                <button type="submit" >Confirmar compra</button>
            </form>
        </CheckoutScreen>
     )
}

const CheckoutScreen = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 98vw;
    height: 98vh;
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    input{
        margin: 20px;
        height: 20px;
        width: 200px;
        outline: none;
    }

    div{
        justify-content: center;
        text-indent: -30px;
        align-items: center;
        width: 300px;
        display: flex;
    }

`