import React from 'react';
import styled from 'styled-components';
import Actividades from '../components/Actividades';

import Carousel from '../components/Carousel';
import ComponentHome from '../components/ComponentHome'; 
import {Container, Titulo, SubTitulo} from '../components/GlobalStyles';



const Toolbar = styled.div`
    width: 100%;
    height: 100px;
`

const Home = () => {
    return (  
        <Container data-aos="fade-down" >
            {/* <Toolbar /> */}
            <Carousel />
            <Titulo>¿Quiénes somos?</Titulo>
            <SubTitulo style={{textAlign: "center", marginBottom: "100px"}}>Texto</SubTitulo>
            <ComponentHome />
            <Titulo>Nuestras Actividades</Titulo>
            <Actividades />

        </Container>
    );
}
 
export default Home;