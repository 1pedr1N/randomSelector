import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, #628e75 100%, #1a4855 100%);
`
export const Title = styled.text`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    color: #fafafa;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 40px;
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 20vh;
`
export const ContainerResponse = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 20vh;
    table {
        width: 100%;
    }
    td {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    th {
    }
`
export const Input = styled.input`
    width: 80%;
    height: 50px;
    border-radius: 15px;
    padding-left: 30px;
    outline: none;
    border: 1px solid #fafafa;
    padding: 10px;
`
export const BoxResponse = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 100%;
    background-image: linear-gradient(to bottom, #628e75 80%, #1a4855 100%);
    border: 1px solid #fafafa;
    border-radius: 15px;
`
export const Text = styled.text`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px;
    color: #fafafa;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
`
export const TextResponse = styled.text`
    display: flex;

    align-items: center;
    padding: 8px;
`
