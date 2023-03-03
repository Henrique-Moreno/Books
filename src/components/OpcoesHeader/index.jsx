import React from 'react';
import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
    align-items: center;
`

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    list-style: none;
    height: 100%;
    cursor: pointer;
`

const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTES'];

export default function OpcoesHeader() {
  return (
    <>
      <Opcoes>
        {textoOpcoes.map((texto) => (
          <Opcao key={texto}>
            <p>{texto}</p>
          </Opcao>
        ))}
      </Opcoes>
    </>
  )
}
