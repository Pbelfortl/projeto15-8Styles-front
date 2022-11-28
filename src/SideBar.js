import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"



export default function SideBar({ setCategory }) {

    const [show, setShow] = useState(false)
    const naviagte = useNavigate()

    return (
        <Bar show={show}>
            <ion-icon name="list-outline" onClick={() => setShow(!show)}></ion-icon>
            
            {show === false ? <></> : <>
            <Category onClick={ () => {
                naviagte("/")
                setCategory({category:"", subCategory:""})}}><h1>Home</h1></Category>
            <Line />
            <Category>
                <h1 onClick={(() => setCategory({category: "roupa", subCategory: ""}))}>Roupas</h1>
                <SubCategory onClick={(() => setCategory({category: "roupa", subCategory: "camisa"}))}>Camisas</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "roupa", subCategory: "camiseta"}))}>Camisetas</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "roupa", subCategory: "short"}))}>Shorts</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "roupa", subCategory: "vestido"}))}>Vestidos</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "roupa", subCategory: "moleton"}))}>Moletons</SubCategory>
            </Category>
            <Line />
            <Category>
                <h1 onClick={(() => setCategory({category:"calçado", subCategory:""}))}>Calçados</h1>
                <SubCategory onClick={(() => setCategory({category: "calçado", subCategory: "tênis"}))}>Tênis</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "calçado", subCategory: "sapato"}))}>Sapatos</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "calçado", subCategory: "sandalia"}))}>Sandálias</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "calçado", subCategory: "chinelo"}))}>Chinelos</SubCategory>
            </Category>
            <Line />
            <Category>
                <h1 onClick={(() => setCategory({category: "acessório", subCategory: ""}))}>Acessórios</h1>
                <SubCategory onClick={(() => setCategory({category: "acessório", subCategory: "boné"}))}>Bonés</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "acessório", subCategory: "bucket"}))}>Buckets</SubCategory>
            </Category>
            </>
            }
            
        </Bar>
    )
}

const Bar = styled.aside`
    display: flex;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: ${props => props.show === false ? '6vw' : '12vw'};
    //width: 8vw;
    height: 100vh;
    background-color: #181824;
    z-index: 2;
    ion-icon{
        color: white;
        width: 40px;
        height: 40px;
        margin-bottom: 30px;
        cursor: pointer;
    }
`
const Line = styled.hr`
    width: 100%;
`
const Category = styled.div`
    width: 100%;
    //height: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    h1 {
        font-family: "Raleway";
        font-style: normal;
        font-size: 25px;
        font-weight: 700;
        line-height: 19px;
        color: #FFFFFF;
        margin-bottom: 5px;
    }

`
const SubCategory = styled.p`
        font-family: "Raleway";
        font-style: normal;
        font-size: 15px;
        font-weight: 400;
        line-height: 19px;
        color: #FFFFFF;
    
`