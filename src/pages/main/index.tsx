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
                    <table>
                        <tr>
                            <th>
                                <S.Input />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <S.BoxResponse>
                                    <S.Text>Suas escolhas foram! </S.Text>
                                    <S.TextResponse>sasa </S.TextResponse>
                                </S.BoxResponse>
                            </td>
                        </tr>
                    </table>
                </S.ContainerResponse>
            </S.MainContainer>
        </S.Container>
    )
}
export default MainPage
