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
                <div className="row">
                    <Link to="registerAccount">
                        <S.TextOptions> Registra-se</S.TextOptions>{' '}
                    </Link>
                    <Link to="/recover">
                        <S.TextOptions> Esqueceu sua senha</S.TextOptions>{' '}
                    </Link>
                </div>
            </S.ContainerLogin>
        </S.Container>
    )
}
export default LoginScreen
