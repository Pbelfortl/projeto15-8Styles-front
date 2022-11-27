import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import axios from "axios"
import AuthContext from "./contexts/authContext"
import TopBar from "./TopBar.js";
import SideBar from "./SideBar.js";
import BASE_URL from "./constants/url.js"
    

export default function LandingPage ({ category }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const promise = axios.get(`${BASE_URL}/getProducts?category=${category.category}?subCategory=${category.subCategory}`)

        promise.then((ans) => {
            console.log("ok")
            setProducts(ans.data)
        })

        promise.catch(() =>  console.log("deu ruim"))
    }, [category])


    return(
        <>
        <TopBar/>
        <SideBar/>
        <Container>
            {products.map(product => 
                <Product key={product._id}>  
                    <img src={product.image} alt="produto"/>
                    <div><span>{product.name}</span> <span>R$ {(product.value).toFixed(2)}</span></div>
                    <div>{product.description}</div>
                    <button><ion-icon name="bag-add-outline"></ion-icon></button>
                </Product>)}
        </Container>
        </>
        
    )
}


const Container = styled.div`
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    position: absolute;
    top: 90px;
    right: 4vw;
    width: 84vw;
    min-height: 80vh;
    background-color: white;
    border-radius: 10px;
    
`

const Product = styled.div`
    position: relative;
    box-sizing: border-box  ;
    width: 300px;
    height: 300px;
    border: solid 1px black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    background-size: cover;
    img{
        border-radius: 5px;
        width: 298px;
        height: 200px;
        object-fit: cover;
    }
    div{
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }
    button{
        position: absolute;
        background-color: none;
        border: none;
        border-radius: 50%;
        right: 10px;
        bottom: 10px;
        width: 30px;
        height: 30px;
        font-size: 20px;
    }
`