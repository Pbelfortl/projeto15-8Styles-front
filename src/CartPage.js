import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContext from "./contexts/authContext";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function CartPage({setCategory}) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const { token } = useContext(AuthContext);

  function getCartItems() {
    const URL = "http://localhost:5000/cart";
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };

    axios
      .get(URL, config)
      .then((res) => {
        setCart(res.data);

        let totalValue = 0;
        res.data.forEach((item) => (totalValue += Number(item.product.value)));

        setTotal(totalValue);
      })
      .catch((err) => console.log(err.response.data.message));
  }

  useEffect(() => {
    getCartItems();
  }, [token]);

  return (
    <>
      <TopBar />
      <SideBar setCategory={setCategory} />
      <MainContainer>
        {cart.length !== 0 ? (
          cart.map((item, i) => (
            <CartItem key={i}>
              <img src={item.product.image} alt={item.name} />
              <strong>{item.product.name}</strong>
              <p>R$ {item.product.value}</p>
            </CartItem>
          ))
        ) : (
          <h3>Carrinho vazio ou usuário não está logado</h3>
        )}
        Valor total: R$ {total}
      </MainContainer>
    </>
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 10vh;
  border: 1px solid black;
  overflow: scroll;
  img {
    width: 80px;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
  }
`;
