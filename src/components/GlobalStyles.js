import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    width: 100%;
    min-height: 120vh;
    color: #2a2a2a;
`;

const Titulo = styled.h1`
    margin-top: 10px;
    width: 90%;
    text-align: center;
    color: #2e2e2e;
`;

const SubTitulo = styled.h2`
    width: 90%;
    margin-top: 30px;
    @media (min-width: 768px) {
        width: 80%; 
        font-size: 24px;
    }
    @media (min-width: 1024px) {
        width: 50%;
        font-size: 26px;
    }
`

const Texto = styled.p`
    /* background: red; */
    width: 90%;
    font-weight: 900;
    margin-top: -5px;
    text-indent: 40px;
    @media (min-width: 768px) {
        width: 80%; 
        font-size: 18px;
    }
    @media (min-width: 1024px) {
        width: 50%;
        font-size: 20px;
    }
`

const ContainerInformacion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    background: #F5F5F5;
    
`

export {Container, Titulo, SubTitulo, Texto, ContainerInformacion};