import React from 'react'
import * as S from './styles'
import 'xp.css/dist/XP.css'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <S.Container>
            <div className="window" style={{ width: '300px' }}>
                <div className="title-bar">
                    <div className="title-bar-text">Registrar</div>
                </div>
                <S.ContainerInput>
                    <div className="window-body">
                        <div
                            className="field-row-stacked"
                            style={{ width: '250px' }}
                        >
                            <label htmlFor="text22" className="blackColor">
                                Usúario
                            </label>
                            <input
                                id="text22"
                                type="text"
                                placeholder="Digite seu Usúario"
                            />
                        </div>
                        <div
                            className="field-row-stacked"
                            style={{ width: '250px' }}
                        >
                            <label htmlFor="text22" className="blackColor">
                                Email
                            </label>
                            <input
                                id="text22"
                                type="text"
                                placeholder="Digite seu Email"
                            />
                        </div>
                        <div
                            className="field-row-stacked"
                            style={{ width: '250px' }}
                        >
                            <label htmlFor="text21" className="blackColor">
                                Senha
                            </label>
                            <input
                                id="text23"
                                type="password"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <button className="top">Registrar</button>
                        <Link to="/">
                            <button
                                className="top"
                                style={{ marginLeft: '10px' }}
                            >
                                Voltar
                            </button>
                        </Link>
                    </div>
                </S.ContainerInput>
            </div>
        </S.Container>
    )
}

export default Register
