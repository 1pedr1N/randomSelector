import React from 'react'
import * as S from './styles'
import 'xp.css/dist/XP.css'
import { Link } from 'react-router-dom'
const RecoverPassword = () => {
    return (
        <S.Container>
            <div className="window" style={{ width: '300px' }}>
                <div className="title-bar">
                    <div className="title-bar-text">Recuperar senha</div>
                </div>
                <S.ContainerInput>
                    <div className="window-body">
                        <div
                            className="field-row-stacked"
                            style={{ width: '250px' }}
                        >
                            <label htmlFor="text22" className="blackColor">
                                Email
                            </label>
                            <input
                                id="text22"
                                type="email"
                                placeholder="Digite seu Usúario"
                            />
                        </div>
                        <div
                            className="field-row-stacked"
                            style={{ width: '250px' }}
                        ></div>
                        <Link to="/code">
                            <button className="top">
                                Enviar Código Por Email
                            </button>
                        </Link>
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

export default RecoverPassword
