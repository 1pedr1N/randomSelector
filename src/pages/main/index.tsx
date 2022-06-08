import React from 'react'
import * as S from './styles'

const MainPage = () => {
    return (
        <S.Container>
            <S.Title>Seja bem vindo ao Choices Usúario!</S.Title>
            <S.MainContainer>
                <S.ContainerInput>
                    <S.Input placeholder="Ajuda para sua Choice de hoje!" />
                </S.ContainerInput>
                <S.ContainerResponse>
                    <div className="div2">
                        <S.Select>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>F</option>
                        </S.Select>
                        <S.Button>
                            <S.Icon />
                        </S.Button>
                    </div>
                    <div className="div1">
                        <S.BoxResponse>
                            <S.Text>Suas escolhas para o A foram! </S.Text>
                            <S.TextResponse>sasa </S.TextResponse>
                        </S.BoxResponse>{' '}
                    </div>
                </S.ContainerResponse>
            </S.MainContainer>
        </S.Container>
    )
}
export default MainPage
