import React from 'react';
import styled from 'styled-components';

import {Container, Titulo, SubTitulo, Texto} from '../components/GlobalStyles';


import carismabg from '../img/carismabg.png';
import catequesis from '../img/catequesis.png';
import enseñanza2 from '../img/enseñanza2.png';
import visita from '../img/visita.png'
import misioneras2 from '../img/misioneras2.png';
import carisma2 from '../img/carisma.png';


const ContainerBg = styled.div`
    width: 80%;
    /* background: red; */
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    margin: 40px 0;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
    }
`

const Ul = styled.ul`
    width: 50%;
    @media (max-width: 768px) {
        width: 90%;
    }
`

const Li = styled.li`
    font-size: 24px;
    font-weight: 900;
    color: #2a2a2a;
    margin: 20px 0;
`

const ImgBg = styled.img`
    width: 50%;
    @media (max-width: 768px) {
        width: 90%;
    }   
`

const Img = styled.img `
    width: 50%;
    border-radius: 20px;
    margin: 20px;
    @media (max-width: 768px) {
        width: 90%;
    }
`

const carismas = [
    {
        texto: "La actividad catequística."
    },
    {
        texto: "La enseñanza a la niñez y a los jóvenes con preferencia a los más jóvenes."
    },
    {
        texto: "Atención a los niños más desamparados en la sociedad."
    },
    {
        texto: "Visita a los enfermos."
    },
    {
        texto: "La actividad misionera fuera y dentro de la Iglesia. Donde sea necesario para la Iglesia."
    },
    
]

const Carisma = () => {

    const ListarCarismas = carismas.map((carisma, index) => {
        return <Li key={index}>{carisma.texto}</Li>
    })    

    return (  
        <Container data-aos="fade-down" >
            <Titulo style={{marginTop: "120px"}}>Carisma y espiritualidad de las Hermanas Misioneras de San Francisco Javier</Titulo>
            <ContainerBg >
                <ImgBg src={carismabg} />
                <Ul>{ListarCarismas}</Ul>
            </ContainerBg>
            <Titulo id="catequesis" style={{marginTop: "120px"}}>Catequesis</Titulo>
            <ContainerBg className="containerBg">
                <Texto style={{margin: 0}}>La Catequesis es una de las formas de
                servicio a la Palabra de Dios y se inscribe dentro del
                Ministerio Profético. Es una acción eclesial destinada a los
                miembros de la comunidad cristiana que han recibido el
                anuncio de fe (también llamado primer anuncio o
                kerigma) y lo han aceptado en sus vidas. Como acción
                educativa, busca instruir a los discípulos,
                acompañándolos en el camino de maduración de su fe. La
                finalidad de toda acción catequística es que cada cristiano
                pueda encontrarse con la persona de Jesucristo y hacer
                confesión de su fe trinitaria.
                </Texto>
                <Img src={catequesis} />
            </ContainerBg>
            <Titulo id="ensenanza" style={{marginTop: "120px"}}>Enseñanza</Titulo>
            <ContainerBg className="containerBg" >
                <Img src={enseñanza2} />
                <Texto style={{margin: 0}} >Educación en la que se transmiten las
                verdades religiosas conforme al magisterio y se procura la
                formación integral de la persona humana, en orden a su
                fin último y, simultáneamente, al bien común de la
                sociedad, de los niños y los jóvenes, de manera que
                puedan desarrollar armónicamente sus dotes físicas,
                morales e intelectuales.
                </Texto>
            </ContainerBg>
            <Titulo id="necesitados" style={{marginTop: "120px"}}>Atención a los más necesitados</Titulo>
            <ContainerBg className="containerBg">
                <Texto style={{margin: 0}} >
                Nuestro salvador
                Jesucristo prestó servicio a los pobres, enfermos y
                necesitados de una u otra manera. Él no hizo acepción de
                personas cuando estos venían a suplicar ayuda. Seguimos
                su ejemplo al no discriminar a nadie a la hora de brindar
                alivio. A todos se nos llama a participar en la erradicación
                de la pobreza, la cual no es solo material, sino también
                espiritual.
                </Texto>
                <Img src={carisma2} />
            </ContainerBg>
            <Titulo id="visita" style={{marginTop: "120px"}}>Visita a enfermos</Titulo>
            <ContainerBg className="containerBg">
                <Img src={visita} />
                <Texto>
                La invitación de visitar a los
                enfermos viene del mismo Jesucristo. Primero, con su
                ejemplo: acogía y curaba a muchos enfermos que
                encontró a lo largo de su vida. Después, con sus palabras,
                al recordarnos que quien visita a un enfermo visita al
                mismo Cristo (cf. Mt 25,31-46). Desde el ejemplo de
                Cristo nuestra congregación siente la llamada a ser
                auténticos prójimos de nuestros hermanos enfermos. De
                modo especial, el domingo puede convertirse en un día
                dedicado a visitar a los enfermos. Visitar y cuidar a los
                enfermos es la primera de las obras de misericordia
                corporales. Vale la pena recordarlo, para aprender a
                mirar a los demás “con los ojos de Cristo” (cf. Benedicto
                XVI, encíclica “Deus caritas est” n. 18), para acogerlos
                desde la perspectiva del Maestro que vino para servir y
                que atendió con tanta ternura a muchos enfermos
                encontrados a lo largo del camino.
                </Texto>
            </ContainerBg>
            <Titulo id="misioneras" style={{marginTop: "120px"}}>Actividad misionera</Titulo>
            <ContainerBg className="containerBg" style={{marginBottom: "100px"}}>
                <Texto style={{margin: 0}}>
                La misión evangelizadora se
                refiere al proyecto de la Iglesia católica que tiene la tarea
                de dar a conocer la Iglesia y su doctrina cristiana en
                comunidades no creyentes mediante obra social y el
                anuncio del evangelio. Esta misión es uno de los
                propósitos principales de nuestra comunidad como así
                también fortalecer la presencia de Cristo dentro de la
                propia Iglesia, ayudando en las parroquias, en misiones
                barriales, sobre todo en las grandes ciudades, donde la fe
                en Cristo, parece haber sido expulsada de ellas.
                </Texto>
                <Img src={misioneras2} />
            </ContainerBg>
        </Container>
    );
}
 
export default Carisma;