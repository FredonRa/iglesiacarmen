import React from 'react';
import styled from 'styled-components';
import {Container, Titulo, SubTitulo, Texto} from '../components/GlobalStyles';

import canonizacion from '../img/canonizacion.png'
import canonizacion2 from '../img/canonizacion2.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const ImgBg = styled.img`
    width: 90%;
    margin-top: 120px;
    border-radius: 20px;
    @media (min-width: 768px) {
        width: 50%;
        max-width: 700px
    }
`

const Oracion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: auto;
    background: white;
    text-align: center;
    padding-left: 30px;
    margin: 80px 0;
    color: gray;
    font-style: italic;
    filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, .2));
    @media (min-width: 768px) {
        width: auto;
        text-align: center;
        max-width: 700px
    }
`

const Img = styled.img`
    width: 90%;
    margin-top: 50px;
    @media (min-width: 768px) {
        width: auto;
        text-align: center;
        max-width: 700px
    }
`

const Canonizacion = () => {
    return ( 
        <Container data-aos="fade-down" >
            <ImgBg src={canonizacion} />
            <SubTitulo style={{textAlign: "center", fontStyle: "oblique"}}>
                Imágen de la Sierva de Dios, la Madre Isabel y objetos de su pertenencia.
            </SubTitulo>
            <Titulo style={{marginTop: "100px"}}>Causa de Canonización de la Madre Isabel</Titulo>
            <Texto>Al canonizar a ciertos fieles, es decir, al proclamar
            solemnemente que esos fieles han practicado heroicamente
            las virtudes y han vivido en la fidelidad a la gracia de
            Dios, la Iglesia reconoce el poder del Espíritu de santidad,
            que está en ella, y sostiene la esperanza de los fieles
            proponiendo a los santos como modelos e intercesores.
            &quot;Los santos y las santas han sido siempre fuente y origen
            de renovación en las circunstancias más difíciles de la
            historia de la Iglesia&quot; (Exhortación Apostólica
            Christifideles Laici 16, 3).
            </Texto>
            <Texto>
            La madre Isabel Fernández es Sierva de Dios desde el año
            2000, y se está trabajando para obtener al venerabilidad y
            se están estudiando dos posibles milagros para su
            beatificación. Es muy importante dar a conocer a la Sierva
            de Dios y su obra y orar para que el Señor se muestre
            propicio y pronto sea elevada a los altares.
            </Texto>
            <Texto>
            Un Siervo de Dios es cuando el obispo diocesano y el
            postulador de la causa piden iniciar el proceso de
            canonización. Y presentan a la Santa Sede un informe
            sobre la vida y las virtudes de la persona. La Santa Sede,
            por medio de la Congregación para las Causas de los
            Santos, examina el informe y dicta el decreto diciendo que
            nada impide iniciar la causa (Decreto &quot;Nihil obstat&quot;). Este
            decreto es la respuesta oficial de la Santa Sede a las
            autoridades diocesanas que han pedido iniciar el proceso
            canónico. Obtenido el Decreto de &quot;Nihil obstat&quot;, el Obispo
            diocesano dicta el Decreto de Introducción de la Causa del
            ahora Siervo de Dios.
            </Texto>
            <Img src={canonizacion2} />
            <Oracion>
                <SubTitulo style={{width: "100%"}}>Oración solicitando al Señor la pronta canonización</SubTitulo>
                <Texto style={{width: "90%"}}>
                De la Sierva de Dios, Madre Isabel Fernández
                Dios Uno y Trino, Padre, Hijo y Espíritu Santo,
                Que hiciste brillar los dones de tu Gracia
                En el alma de la madre Isabel que te amó con sencillez
                Y se entregó con generosidad a la evangelización de los
                pobres y de los pequeños con espíritu de humildad,
                obediencia y abnegación.
                </Texto>
                <Texto style={{width: "90%"}}>
                Concédenos la gracia de imitar sus virtudes para que
                Podamos con gozo recorrer el camino de la santidad.
                Por los méritos de su intercesión concédenos la gracia
                que te pedimos y te rogamos, si esa es tu voluntad,
                que la glorifique para que su ejemplo e intercesión
                sirvan a la extensión de tu Reino.
                Así sea
                </Texto>
            </Oracion>
        </Container>
    );
}
 
export default Canonizacion;