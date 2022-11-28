import axios from "axios"
import { useState } from "react"
import styled from "styled-components"


export default function Checkout () {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [payment, setPayment] = useState()


    function confirmBuy (event) {
        event.preventDefault()
        

    }


    return(
        <CheckoutScreen>
            <form onSubmit={confirmBuy}>
                <input placeholder="Nome" onChange={ e => setName(e.target.value)}/>
                <input placeholder="Email" onChange={ e => setEmail(e.target.value)}/>
                <input placeholder="CEP" onChange={ e => setCpf(e.target.value)}/>
                <input  type="radio" id="cartao" value="cartao" name="payment" onChange={e => setPayment(e.target.value)}/>
                <label htmlFor="cartao">Cartão</label>
                <input  type="radio" id="boleto" name="payment" value="boleto" onChange={e => setPayment(e.target.value)}/>
                <label htmlFor="boleto">Boleto</label>
                <input  type="radio" id="pix" name="payment" value="pix" onChange={e => setPayment(e.target.value)}/>
                <label htmlFor="pix">Pix</label>
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
    width: 100vw;
    height: 98vh;
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        margin: 10px;
    }

`