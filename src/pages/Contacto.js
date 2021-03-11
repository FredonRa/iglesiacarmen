import React from 'react';
import styled from 'styled-components';
import {Container, Titulo, SubTitulo, Texto} from '../components/GlobalStyles';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const ContainerUbicaciones = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 70%;
    min-height: 300px;
    /* background: red; */
    @media (max-width: 768px) {
        width: 90%;
    }
`

const Ubicacion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 400px; 
    min-height: 200px;
    background: white;
    filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, .2));
    border-radius: 20px;
    margin-bottom: 20px;
    transition: all .4s;

    @media (max-width: 768px) {
        width: 100%;
    }

    &:hover {
        transform: scale(1.05);
        transition: all .4s;
    }
`

const Info = styled.p`
    margin-left: 20px;
    color: #2e2e2e;
    font-size: 16px;
    font-weight: 900;
    width: 100%;
    text-align: left;
`
const Link = styled.a`
    text-decoration: none;
    color: #2e2e2e;
`

const Contacto = () => {
    return (  
        <Container data-aos="fade-down">
            <Titulo style={{marginTop: "120px"}}>Contáctanos</Titulo>
            <ContainerUbicaciones>
                <Ubicacion>
                    <Titulo>Casa Madre | Saenz Peña</Titulo>
                    <Info>
                        <Link href=""> 
                            Madre Isabel Fernández 1214. <br />
                            (1674) Sáenz Peña, Pcia. De Buenos Aires
                        </Link>
                    </Info>
                    <Info>
                        <Link href="">
                            (011) 4757 – 0129
                        </Link> 
                    </Info>
                    <Info>
                        <Link href="">
                            misiosanjavier@yahoo.com.ar
                        </Link> 
                    </Info>
                </Ubicacion>

                <Ubicacion>
                    <Titulo>Colegio San Rafael | CABA</Titulo>
                    <Info>
                        <Link href=""> 
                            Benito Juárez 2159<br />
                            (1407) Ciudad de Buenos Aires
                        </Link>
                    </Info>
                    <Info>
                        <Link href="">
                            (001) 4566-0462
                        </Link> 
                    </Info>
                    <Info>
                        <Link href="">
                            a517sanrafael@hotmail.com
                        </Link> 
                    </Info>
                </Ubicacion>

                <Ubicacion>
                    <Titulo>Colegio San Pío X | Prov de Buenos Aires</Titulo>
                    <Info>
                        <Link href=""> 
                            Calle 136, Nº 5070<br />
                            (1674) Villa Ballester
                        </Link>
                    </Info>
                    <Info>
                        <Link href="">
                            (011)4769-3787
                        </Link> 
                    </Info>
                    <Info>
                        <Link href="">
                            sanpio-x@yahoo.com.ar
                        </Link> 
                    </Info>
                </Ubicacion>

                <Ubicacion>
                    <Titulo>Colegio San Francisco Javier | Prov de Buenos Aires</Titulo>
                    <Info>
                        <Link href=""> 
                        Boedo 1257<br />
                        (1832) Lomas de Zamora
                        </Link>
                    </Info>
                    <Info>
                        <Link href="">
                        (011) 4243-1080
                        </Link> 
                    </Info>
                    {/* <Info>
                        <Link href="">
                            sanpio-x@yahoo.com.ar
                        </Link> 
                    </Info> */}
                </Ubicacion>

                <Ubicacion>
                    <Titulo> - | Prov de Buenos Aires</Titulo>
                    <Info>
                        <Link href=""> 
                            Posadas 60<br />
                            (1832) Lomas de Zamora
                        </Link>
                    </Info>
                    <Info>
                        <Link href="">
                            (011)4243-2244
                        </Link> 
                    </Info>
                    {/* <Info>
                        <Link href="">
                            sanpio-x@yahoo.com.ar
                        </Link> 
                    </Info> */}
                </Ubicacion>

                <Ubicacion>
                    <Titulo>Villa Madre Isabel - Centro Catequístico | Prov de Buenos Aires</Titulo>
                    <Info>
                        <Link href=""> 
                            Gaspar Campos 2696<br />
                            (1663) San Miguel
                        </Link>
                    </Info>
                    <Info>
                        <Link href="">
                            (011)4664-2076
                        </Link> 
                    </Info>
                    {/* <Info>
                        <Link href="">
                            sanpio-x@yahoo.com.ar
                        </Link> 
                    </Info> */}
                </Ubicacion>

                <Ubicacion>
                    <Titulo>Colegio de San Jose | Prov de San Luís</Titulo>
                    <Info>
                        <Link href=""> 
                            Perdernera 339<br />
                            (5700) San Luis
                        </Link>
                    </Info>
                    <Info>
                        <Link href="">
                            02652-438753
                        </Link> 
                    </Info>
                    <Info>
                        <Link href="">
                            colsanjosecapital@hotmail.com
                        </Link> 
                    </Info>
                </Ubicacion>

                <Ubicacion>
                    <Titulo>Colegio de San Jose | Provincia de Entre Ríos</Titulo>
                    <Info>
                        <Link href=""> 
                            Sarmiento y Chacabuco<br />
                            (3280) COLON
                        </Link>
                    </Info>
                    <Info>
                        <Link href="">
                            03447-421124
                        </Link> 
                    </Info>
                    <Info>
                        <Link href="">
                            misjo@ciudad.com
                        </Link> 
                    </Info>
                </Ubicacion>

                
            </ContainerUbicaciones>
        </Container>
    );
}
 
export default Contacto;