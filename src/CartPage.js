import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContext from "./contexts/authContext";

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const {token} = useContext(AuthContext);

    useEffect(() => {
        const URL = "http://localhost:5000/cart"
        const config = {
            headers: `Bearer ${token}`
        }
        axios.get(URL, config)
        .then((res) => setCart(res.data))
        .catch(err => console.log(err.message))
    }, [token])
    

  return (
    <MainContainer>
      {cart.length !== 0 && cart.map((item) => <CartItem>

      </CartItem>)}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 40vw;
  height: 70vh;
  border: 1px solid black;
`;
const CartItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  height: 10vh;
  border: 1px solid black;
`;