import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BASE_URL from "./constants/url";
import AuthContext from "./contexts/authContext";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function CartPage({setCategory,purchaseProducts, setPurchaseProducts, setPurchaseTotal}) {
  const navigate = useNavigate()
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  let totalValue = 0;
  let products = []

  const { token } = useContext(AuthContext);

  function getCartItems() {
    const URL = `${BASE_URL}/cart`;
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };

    axios
      .get(URL, config)
      .then((res) => {
        setCart(res.data);
        console.log(res.data)
        totalValue=0
        res.data.forEach((item) => {
          (totalValue += (item.product.value))
          products.push(item.product)
        });
        console.log(totalValue)
        setTotal(totalValue);
        setPurchaseTotal(totalValue)
        setPurchaseProducts(products)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCartItems();
  }, [token]);

  return (
    <>
      <TopBar />
      <SideBar setCategory={setCategory} />
      <MainContainer>
        <div>
        {cart.length !== 0 ? (
          cart.map((item, i) => (
            <CartItem key={i}>
              <img src={item.product.image} alt={item.product.name} />
              <strong>{item.product.name}</strong>
              <p>R$ {item.product.value}</p>
            </CartItem>
          ))
        ) : (
          <h3>Carrinho vazio ou usuário não está logado</h3>
        )}
        </div>
        <Confirm>
          Valor total: R$ {total.toFixed(2)}

          <button onClick={() => { (purchaseProducts.length===0) ? 
          alert("Insira ao menos um item no carrinho") : 
          navigate("/checkout")}}>Concluir Compra</button>
        </Confirm>
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
  overflow-y: scroll;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  button{
    background-color: #181824;
    color: white;
    min-height: 30px;
    width: 30vw;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  div{
    align-items: center;
    width: 400px;
  }
`;

const CartItem = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  width: 80%;
  height: 10vh;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 15px;
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
  ion-icon{
    cursor: pointer;
  }
`

const Confirm = styled.div`
  display: flex;
  flex-direction: column;
`
