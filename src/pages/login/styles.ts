import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/backgroundPerson.svg'
export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, #628e75 80%, #1a4855 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    .text {
        color: #ff725e;
        font-family: 'Poppins';
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const ContainerLogin = styled.div`
    flex-direction: column;
    justify-content: center;
    width: 25%;
`
export const Image = styled(Icon)`
    width: 75vh;
    height: 75vh;
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 15px;
    outline: none;
    border: 1px solid #ff725e;
    padding: 10px;
    margin-top: 20px;
`
export const Title = styled.text`
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 50px;
    display: flex;
    justify-content: center;
`
export const Button = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 15px;
    outline: none;
    border: 1px solid #ff725e;
    padding: 10px;
    margin-top: 20px;
    background-color: #ff725e;
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fafafa;
    :hover {
        background-color: #0072d2;
        transition: 0.4s;
        border: 1px solid #0072d2;
    }
`
export const TextOptions = styled.div`
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: initial;
    cursor: pointer;
    :hover {
        color: #0072d2;
        transition: 0.4s;
    }
`
