import React from 'react';
import Perfil from '../../imagens/perfil.svg';
import Sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    list-style: none;
`
const icones = [Perfil, Sacola];

export default function IconesHeader() {
    return (
        <>
            <Icones>
                {icones.map((icone) => (
                    <Icone key={icone} >
                        <img src={icone} alt="" />
                    </Icone>
                ))}
            </Icones>
        </>
    )
}
