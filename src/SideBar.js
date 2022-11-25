import { useState } from "react"
import styled from "styled-components"


export default function SideBar () {

    const [show, setShow] = useState(false)

    return (
        <Bar show={show}>
            <ion-icon name="list-outline" onClick={()=>setShow(!show)}></ion-icon>
            <Category></Category>
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
    width: ${props => props.show ===false ? '4vw' : '10vw'};
    height: 100vh;
    background-color: #181824;
    z-index: 2;
    ion-icon{
        color: white;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`

const Category = styled.div`

`