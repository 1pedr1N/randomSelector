import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
const LoginScreen = () => {
    return (
        <S.Container>
            <div>
                <S.Image />
            </div>
            <S.ContainerLogin>
                <S.Title>O que escolher?</S.Title>
                <S.Input placeholder="Usúario" />
                <S.Input placeholder="Senha" />
                <Link to="/welcome">
                    <S.Button> Se decida!</S.Button>
                </Link>
            </S.ContainerLogin>
        </S.Container>
    )
}
export default LoginScreen
