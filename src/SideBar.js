import styled from "styled-components"


export default function SideBar () {
    return (
        <Bar>

        </Bar>
    )
}

const Bar = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 5vw;
    height: 100vh;
    background-color: #181824;
`