import { Titulo } from '../Titulo';
import { livros } from './dadosUltimosLacamentos'; 
import styled from 'styled-components';
import CardRecomenda from '../CardRecomenda';
import imglivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    img {
        margin: 0 1rem;
    }
`

export default function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
               cor='#EB9B00' 
               tamanhoFonte='36px' 
            >
               ÚLTIMOS LANCAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img key={livro.id} src={livro.src} alt={livro.nome}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
               titulo='Talvez você se interesse por...'
               subtitulo='Angular 11'
               descricao='Construindo uma aplicação integrada com a plataforma'
               img={imglivro} alt='angular'
            />
        </UltimosLancamentosContainer>
    )
}

