import { useState } from "react"
import styled from "styled-components"



export default function SideBar({ setCategory }) {

    const [show, setShow] = useState(false)

    return (
        <Bar show={show}>
            <ion-icon name="list-outline" onClick={() => setShow(!show)}></ion-icon>
            <Category onClick={ () => setCategory({category: "", subCategory: ""})}><h1>Home</h1></Category>
            <Line />
            <Category>
                <h1 onClick={(() => setCategory({category: "Roupa", subCategory: ""}))}>Roupas</h1>
                <SubCategory onClick={(() => setCategory({category: "Roupa", subCategory: "Camisa"}))}>Camisas</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "Roupa", subCategory: "Camiseta"}))}>Camisetas</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "Roupa", subCategory: "Vestido"}))}>Vestidos</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "Roupa", subCategory: "Moleton"}))}>Moletons</SubCategory>
            </Category>
            <Line />
            <Category>
                <h1 onClick={(() => setCategory({category: "Calcado", subCategory: ""}))}>Calçados</h1>
                <SubCategory onClick={(() => setCategory({category: "Calcado", subCategory: "Tenis"}))}>Tênis</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "Calcado", subCategory: "Sapato"}))}>Sapatos</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "Calcado", subCategory: "Sandalia"}))}>Sandálias</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "Calcado", subCategory: "Chinelo"}))}>Chinelos</SubCategory>
            </Category>
            <Line />
            <Category>
                <h1 onClick={(() => setCategory({category: "Acessorio", subCategory: ""}))}>Acessórios</h1>
                <SubCategory onClick={(() => setCategory({category: "Acessorio", subCategory: "Bone"}))}>Bonés</SubCategory>
                <SubCategory onClick={(() => setCategory({category: "Acessorio", subCategory: "Bucket"}))}>Buckets</SubCategory>
            </Category>
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
    width: ${props => props.show === false ? '8vw' : '16vw'};
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