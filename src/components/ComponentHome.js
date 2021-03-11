import React from 'react';
import styled from 'styled-components';

import fundadora from '../img/fundadora2.png';
import carisma from '../img/carisma.png'


const Container = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const ContainerImg = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    width: 80%;
    max-width: 400px;
    max-height: 400px;
    background: red;
    filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, .4));

`

const Img = styled.img`
    width: 100%;
    padding-bottom: -30px;
    /* height: 100%; */
`

const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #2e2e2e;
    @media (max-width: 800px) {
        margin-bottom: 70px;
    }
`

const TituloImg = styled.h2`

`

const ComponentHome = () => {
    return ( 
        <Container>
            <Link href="/iglesiacarmen/fundadora" className="containerImg">
                <ContainerImg>
                    <Img src={fundadora} className="img" />
                </ContainerImg>
                <TituloImg>Fundadora</TituloImg>
            </Link>
            <Link href="/iglesiacarmen/carisma-y-espiritualidad" className="containerImg">
                <ContainerImg >
                    <Img src={carisma} className="img" />
                </ContainerImg>
                <TituloImg>Carisma y Espiritualidad</TituloImg>
            </Link>
        </Container>
    );
}
 
export default ComponentHome;