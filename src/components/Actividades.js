import React from 'react';
import styled from 'styled-components';

import enseñanza from '../img/enseñanza.png';
import carisma from '../img/carisma.png';
import visita from '../img/visita.png';
import misioneras from '../img/misioneras.png';

const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 95%;
    margin-bottom: 100px;
    @media (min-width: 768px) {
        width: 60%;
        min-height: 300px;
    }
    /* background: red; */
`

const ContainerActividad = styled.div`
    width: 90%;
    min-height: 300px;
    max-width: 300px;
    margin: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, .4));
    overflow: hidden;
    &:hover div{
        opacity: 40%;
        transition: all .5s;
    }
`

const Img = styled.img`
    width: 100%;
    padding-bottom: -30px;
    border-radius: 20px;
    /* height: 100%; */
`

const TituloActividad = styled.h3`
    width: auto;
    text-align: center;
    position: absolute;
    padding: 10px;
    border-radius: 10px;
    background: white;
`

const Link = styled.a`
    text-decoration: none;
    color: #54F777;
    padding: 5px 8px;
    margin-top: 17px;
    border-radius: 15px;
    border: solid 3px #54F777;
    transition: all .2s;
    z-index: 100;
    position: ;
    &:hover {
        background: #54F777;
        color: white;
        transition: all .2s;
    }
`

const OscurecerFoto = styled.div`
    position: absolute;
    background: black;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: all .5s;
    z-index: 1;


`

const act = [
    {
        link: "/iglesiacarmen/carisma-y-espiritualidad/#ensenanza",
        foto: enseñanza,
        titulo: "Enseñanza"
    },
    {
        link: "/iglesiacarmen/carisma-y-espiritualidad/#necesitados",
        foto: carisma,
        titulo: "Ayuda a los más necesitados"
    },
    {
        link: "/iglesiacarmen/carisma-y-espiritualidad/#visita",
        foto: visita,
        titulo: "Visita a enfermos"
    },
    {
        link: "/iglesiacarmen/carisma-y-espiritualidad/#misioneras",
        foto: misioneras,
        titulo: "Actividad misionera"
    },
    
]

const Actividades = () => {

    const ListarActividades =  act.map((actividad, index) => {
        return (
            <ContainerActividad className="containerAct imgAct" 
            style={{backgroundImg: `url(${actividad.foto})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",

            }}
            >
                <Img src={actividad.foto} className="imgAct" />
                <TituloActividad className="tituloAct">{actividad.titulo} <br /> <br />
                    <Link href={actividad.link}>Ver más</Link>
                </TituloActividad>
                <OscurecerFoto />
            </ContainerActividad>
        );
    })

    return ( 
        <Container>
            {ListarActividades}
        </Container>

    );
}
 
export default Actividades;