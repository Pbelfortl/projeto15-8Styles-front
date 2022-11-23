import styled from "styled-components"



export default function TopBar () {
    return (
        <>
            <Bar></Bar>
        </>
    )
}

const Bar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 95vw;
    height: 60px;
    background-color: #FFFFFF;
`