import React from 'react';
import styled from 'styled-components';
import capilla2 from '../img/capilla.jpg';
import capilla from '../img/capilla2.jpg';

import {Container, Titulo, SubTitulo, Texto, ContainerInformacion} from '../components/GlobalStyles';
import { Parallax } from 'react-scroll-parallax';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const ImagenCapilla = styled.div`
    width: 100%;
    min-height: 300px;
    max-height: 600px;
    background-image: url(${capilla});
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    /* background: red; */
    margin-top: 80px;
    z-index: 1;
`

const Bg = styled.div`
    width: 100%;
    min-height: 300px;
    max-height: 600px;
    background-image: url(${capilla2});
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    /* background: red; */
    margin-top: 80px;
    z-index: 1;   
`

const Capilla = () => {


    return ( 
        <Container data-aos="fade-down">
            {/* <Parallax className="custom-class" y={[-70, 50]} tagOuter="figure">
            </Parallax> */}
                <ImagenCapilla>
                    <img src={capilla} style={{width: "90%",minWidth: "350px", opacity: 0 }}></img>
                </ImagenCapilla>
            
                

            <ContainerInformacion>
            <Titulo>Capilla del Cármen</Titulo>
            <Texto>
                La capilla del Carmen fue fundada gracias al tesón de la Sierva de Dios Madre
                Isabel Fernández del Carmen.
            </Texto>

            <SubTitulo>Donación</SubTitulo>
            <Texto>
                El 5 de abril de 1924, el Sr. Francisco Raffo, hace donación a la Madre Isabel
                Fernández de una parcela de terreno, ubicada en la actual Villa Raffo.
            </Texto>
            <Texto>
                Una vez realizada la entrega del los terrenos el día 20 de diciembre, concurre
                desde La Plata el Obispo, Mons. Alberti a dar la comunión y confirmar a 170 niños, la
                capilla aún no está, pero los oficios se celebran debajo de una carpa preparada para tal
                fin.
            </Texto>

            {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            </Parallax> */}

            <SubTitulo>Construcción</SubTitulo>
            <Texto>
                El 7 de Julio de 1927, la Sra. Carolina Pombo de Barilari, visita a las hermanas
                las cuales viven en extrema pobreza, estas les presentan un presupuesto para la
                construcción de una capilla, la cual sería muy hermosa e imponente.
            </Texto>
            {/* <Bg>
            </Bg> */}

            
            <Texto>
                Ante la sorpresa de las religiosas, la Sra. De Barilari,
                queda muy sobrecogida por la pobreza de las hermanas, por su tarea de ayuda a los
                niños y pobres y como ellas piden lo mejor para El Señor. En ese mismo momento, les
                dice que ella costeará la capilla y aprueba el presupuesto presentado. <br/>
                Mientras tanto, un salón servira como capilla provisoria.
            </Texto>
            <Texto>
                La construcción de la capilla tardó solo dos años. El modelo a tonar del mismo,
                es el de la capilla de las Hermanas del Buen Pastor, actual Parroquia del Buen Pastor de
                Buenos Aires, (la cual hoy fue completamente remodelada y de la original no ha
                sobrevivido ninguna estructura).
            </Texto>
            <SubTitulo>Bendición</SubTitulo>
            <Texto>
                La solemne bendición fue el 13 de junio de 1930. La capilla del Carmen se veía
                desde muy lejana distancia como un faro para los que transitaban por el campo, desde
                la ciudad de Buenos Aires hacia el pueblo de San Martín.
            </Texto>
            </ContainerInformacion>
        </Container>
    );
}
 
export default Capilla;