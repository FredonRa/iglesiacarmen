import React from 'react';
import {Container, Titulo, SubTitulo, Texto} from '../components/GlobalStyles';

import styled from 'styled-components';

const Iframe = styled.iframe`
    width: 80%;
    height: 528px;
`

const Videos = () => {
    return (  
        <Container>
            <Titulo style={{marginTop: "120px"}}>Vida y obra de la Madre Isabel Fernández del Carmen</Titulo>
            <SubTitulo style={{width: "80%", marginTop: "40px" }}>Capitulo #1</SubTitulo>
            <Iframe  src="https://www.youtube.com/embed/LU7999nkzRw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            <SubTitulo style={{width: "80%", marginTop: "80px" }}>Capitulo #2</SubTitulo>
            <Iframe  src="https://www.youtube.com/embed/i1HDWeznt_Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            <SubTitulo style={{width: "80%", marginTop: "80px" }}>Capitulo #3</SubTitulo>
            <Iframe  src="https://www.youtube.com/embed/W5XqyszKd4o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            <SubTitulo style={{width: "80%", marginTop: "80px" }}>Capitulo #4</SubTitulo>
            <Iframe  src="https://www.youtube.com/embed/qCXoIL3rd0s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            <SubTitulo style={{width: "80%", marginTop: "80px" }}>Capitulo #5</SubTitulo>
            <Iframe  src="https://www.youtube.com/embed/XhgyVtG7N0I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            <SubTitulo style={{width: "80%", marginTop: "80px" }}>Capitulo #6</SubTitulo>
            <Iframe  src="https://www.youtube.com/embed/w7yJm9R8Et4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            <SubTitulo style={{width: "80%", marginTop: "80px" }}>Día del niño en San Miguel</SubTitulo>
            <Iframe  src="https://www.youtube.com/embed/FWcxY4CVnXw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            <SubTitulo style={{width: "80%", marginTop: "80px" }}>Actividades con los niños del colegio San Pio X</SubTitulo>
            <Iframe  src="https://www.youtube.com/embed/ijbbdPD0X0k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            <SubTitulo style={{width: "80%", marginTop: "80px" }}>Día del niño solidario</SubTitulo>
            <Iframe style={{marginBottom: "120px"}}  src="https://www.youtube.com/embed/HKiiANL7bAM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </Container>
    );
}
 
export default Videos;