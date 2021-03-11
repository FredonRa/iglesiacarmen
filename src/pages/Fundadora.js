import React from 'react';
import styled from 'styled-components';
import {Container, Titulo, SubTitulo, Texto, ContainerInformacion} from '../components/GlobalStyles';
import { Parallax } from 'react-scroll-parallax';
import fundadora from '../img/fundadora.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const ImagenFundadora = styled.div`
    width: 100%;
    min-height: 300px;
    max-height: 800px;
    background-image: url(${fundadora});
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    /* background: red; */
    margin-top: 0;
    z-index: 1;
`

const Label = styled.label`
        width: 80%; 
    font-size: 20px;
    margin: 20px 0;
    font-weight: 500;
    @media (min-width: 768px) {
        width: 80%; 
        font-size: 18px;
    }
    @media (min-width: 1024px) {
        width: 50%;
        font-size: 20px;
    }
`

const Lema = styled.p `
    font-style: italic;
`

const Fundadora = () => {
    return ( 
        <Container data-aos="fade-down" >
            {/* <Parallax className="custom-class" y={[-40, 30]} tagOuter="image">
                </Parallax> */}
                {/* <ImagenFundadora >
                </ImagenFundadora> */}
                    <img src={fundadora} style={{width: "30%",minWidth: "350px", opacity: 100, marginTop: 80 }}></img>
                
            <ContainerInformacion>
                <Titulo>Sierva de Dios Rda. Madre Isabel Fernández del Carmen</Titulo>
                <SubTitulo>Llegada a Argentina</SubTitulo>
                <Texto>
                    En el año 1893 llegaban a la Argentina, Isabel y Encarnación, las hijas de Don
                    Buenaventura Fernández y Antonia Sánchez, provenientes de Málaga (España). La
                    situación económica en aquel país era muy crítica y por eso la familia Fernández 
                    se ve obligada a buscar mejoras económicas.
                </Texto>
                <SubTitulo>De pequeña</SubTitulo>
                <Texto>
                    Isabel contaba entonces con apenas doce años, y su hermana en cambio era ya
                    una joven de veintiséis años. Ambas educadas en un ambiente profundamente cristiano,
                    donde reinaba la unión, el amor y se compartían momentos de alegría y de
                    preocupación. Esto ayudó a Isabel a lograr una personalidad sólida, firme, y a adquirir
                    muy pronto una madurez y responsabilidad en todo lo que emprendía. <br />
                    Desde muy jovencita, se despertó en ella el celo por la salvación de las almas. Admiró y 
                    trató de imitar desde su adolescencia, a los grandes santos que todo lo entregaron por la
                    extensión del Reino de Dios.
                </Texto>
                <Label>
                    Su lema era:
                <Lema>
                    "Buscad el reino de Dios y su justicia y todo lo demás se os dará por añadidura" (Mt. 6, 33).
                </Lema>
                </Label>
                <Texto>
                    Apenas instalados en la Capital federal comenzó a preocuparse por los niños que
                    vivían en los conventillos con grandes carencias en el orden moral, espiritual y material.
                    Su sensible corazón le hacía perder el sueño, el pensar cómo sacar de esa miseria
                    espiritual a estos pequeños para llevarlos a Jesús. A ellos les enseñó el catecismo, con la
                    ayuda de su hermana Encarnación y algunas buenas amigas que Isabel, como niña
                    inteligente, supo encontrar.
                </Texto>
                <Texto>
                    A los quince años era una celosa Celadora del Apostolado de la Oración,
                    trabajando con los Padre Jesuitas de la Iglesia del Salvador, de Capital Federal. A
                    medida que va creciendo, va descubriendo el proyecto de Dios en su vida. Sus ansias de
                    "llevar muchas almas a Dios" a costa de grandes sacrificios, le llenaba de gozo, y ponía
                    todo su empeño en lograr estos objetivos.
                </Texto>
                <SubTitulo>Trabajo apostólico,</SubTitulo>
                <Texto>
                    En 1913 Isabel fue invitada a trabajar en Villa Lynch, en donde existía un
                    pequeño oratorio. Allí le ofrecieron abrir un Centro Catequístico para la preparación a
                    los primeros sacramentos. Pero ante la realidad de tantos niños que aún no sabían leer ni
                    escribir Isabel vio dificultada su acción como catequista. Esto no hace retroceder a
                    Isabel, sino a ir en busca de otros caminos. Así pensó levantar una escuela para lograr
                    una formación integral de la niñez. Con muy pocos recursos materiales pero con gran fe,
                    se lanzó al logro de este objetivo y abrió una pequeña escuela. <br />
                    Lamentablemente, no se
                    dieron allí las condiciones para que esto perdurara, y después de un tiempo, ante la falta
                    de lugar para desarrollar las distintas actividades, tuvieron que trasladarse a la calle
                    Sanabria de Capital Federal, pero esto no le impidió seguir trabajando y reuniendo allí a
                    los niños, aún de lugares muy distantes.
                </Texto>
                <SubTitulo>El plan de Dios para Isabel</SubTitulo>
                <Texto>
                    Isabel iba viendo cada vez más claro el plan de dios en ella, además de trabajar en 
                    misiones como laica, sería el de fundar un Instituto Religioso. 
                    Éste, llevado por su carisma apostólico misionero, trabajará de la misma
                    forma para ganar muchas almas a Dios. Muchos fueron los que alentaron y apoyaron
                    sus nobles ideales aunque también tuvo que afrontar graves dificultades como pruebas
                    del amor de Dios.
                </Texto>
                <Texto>
                    El 1º de junio de 1924 recibió el permiso de fundar un Instituto Religioso, que
                    llevaría el nombre de un gran misionero: San Francisco Javier, y el 3 de diciembre del
                    año 1925 funda el Instituto tan deseado con sede en Villa Raffo - Sáenz Peña.
                </Texto>
                <Texto>
                    Ella contó con la generosidad del Sr. Raffo, quien donó los terrenos y la caridad
                    de la Sra. Carolina Pombo de Barilari quien gracias a su amor hacia los más pobres
                    costeó la creación de la escuela y capilla Ntra. Sra. Del Carmen.
                </Texto>
                <Texto>
                    En 1936 se regocija con la noticia de que el Instituto ha sido aprobado
                    canónicamente, contando ya con un importante número de hermanas y habiéndose
                    extendido ya su radio de acción por las zonas de Santos Lugares, Caseros, Lanús, Bella
                    Vista y fundado la primera casa filial en Colón - Entre Ríos. Pero aún cuando el
                    Instituto necesitaba de su presencia, Dios dispuso otra cosa, llamándola para sí un 28 de
                    septiembre de 1942. Tal vez cuando aún podía dar mucho a los ojos de los hombres, el
                    Señor la encontró madura para entrar en su morada a gozar del premio eterno.
                </Texto>
                <hr style={{background: "#2e2e2e", width: "20%", margin: "40px 0"}} />
                <Texto>
                    Su sepulcro se encuentra en el coro de la Capilla de Ntra. Sra. Del Carmen de
                    Villa Raffo, Partido De Tres de Febrero, Pcia. De Buenos Aires, y a él concurren
                    cientos de fieles a solicitar la intersección de esta humilde Sierva de Dios, que solo ha
                    cumplido con las palabras que la Santísima Virgen nos dejará: “Hagan todo lo que EL
                    (Jesús) les diga…”
                </Texto>
                <Texto>
                    Como Iglesia, este compromiso y esta alegría, no puede ser sólo de los
                    miembros del Instituto, sino de todos aquellos hombres de buena voluntad que buscan el
                    bien común teniendo a Dios como centro y guía en sus vidas.
                </Texto>
            </ContainerInformacion>
        </Container>
    );
}
 
export default Fundadora;