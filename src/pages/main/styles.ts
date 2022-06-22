import styled from 'styled-components'
export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, #628e75 80%, #1a4855 100%);

    .blackColor {
        color: #000000;
    }
    .top {
        margin-top: 10px;
    }
    .inputSize {
        width: 27%;
    }
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`
export const Title = styled.text`
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 50px;
    display: flex;
    justify-content: center;
`
export const MainContainer = styled.div`
    width: 100vw;
`
export const ContainerBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 10%;
`
