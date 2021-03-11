import React from 'react';
import styled from 'styled-components';

import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md';
import {AiTwotonePhone} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';

import logo from '../img/logo-blanco2.png'

const FooterPage = styled.footer`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    background: #2e2e2e;
    min-height: 300px;
    padding: 0;
    margin: 0;
`

const Logo = styled.img`
    width: 200px;
`

const Contacto = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TextoContacto = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
    font-weight: 500;
    margin: 10px;
`

const Titulo = styled.h2`
    color: white;
    width: 100%;
`

const Copy = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* background: red; */
    height: auto;
    padding: 5px;
    background: white;
    font-weight: 900;
    position: relative;
    bottom: 0;
`

const TextoCopy = styled.p`
    /* text-decoration: none;
    color: #2e2e2e; */
`


const Footer = () => {
    return (  
        <FooterPage >
            <Logo src={logo} />
            <Contacto>
                <Titulo >Contacto</Titulo>
                <div>

                <TextoContacto target="_blank" href="https://www.google.com/maps/place/Reverenda+Madre+Isabel+Fern%C3%A1ndez+1214,+B1675ATD+Villa+Raffo,+Provincia+de+Buenos+Aires/@-34.6056655,-58.5302138,17z/data=!3m1!4b1!4m8!1m2!2m1!1sContacto+Madre+Isabel+Fern%C3%A1ndez+1214+(1674)+S%C3%A1enz+Pe%C3%B1a,+Buenos+Aires,+Argentina.!3m4!1s0x95bcb7c3b673379f:0x9bab0b814c529814!8m2!3d-34.6056699!4d-58.5280251">
                    <FaMapMarkerAlt className="icono" />
                    Rda. Madre Isabel Fernández 1214 (1674) <br /> Sáenz Peña, Buenos Aires, Argentina.
                </TextoContacto>
                <TextoContacto target="_blank" href="mailto: misiosanjavier@yahoo.com.ar" >
                    <MdEmail className="icono" />
                    misiosanjavier@yahoo.com.ar
                </TextoContacto>
                </div>

                <div>
                    <TextoContacto target="_blank" href="tel:47570129" >
                        <AiTwotonePhone className="icono" />
                        (011) 4757 – 0129
                    </TextoContacto>
                    <TextoContacto target="_blank" href="https://api.whatsapp.com/send/?phone=5491155735000&text=Hola%20hermanas%20misioneras,%20quisiera%20comunicarme%20con%20ustedes&app_absent=0" >
                        <AiOutlineWhatsApp className="icono" />
                        +54 9 011 5573-5000
                    </TextoContacto>
                    <TextoContacto target="_blank" href="https://www.facebook.com/groups/2722397024749118/user/100009157395519/" >
                        <FaFacebookF className="icono" />
                        Madre Isabel Fernández del Carmen
                    </TextoContacto>
                </div>
                


            </Contacto>

            <Contacto>

            </Contacto>
            {/* <Redes>
                <a href="https://www.facebook.com/groups/2722397024749118/user/100009157395519/" target="_blank"><FaFacebookF className="icono" /></a>
            </Redes> */}
            <Copy><TextoCopy >© 2021 - Hermanas Misioneras de San Francisco Javier | Desarrollado por <a style={{textDecoration: "none", color: "green",}} href="https://api.whatsapp.com/send/?phone=5491140566523&text=Hola%20Federico,%20estoy%20buscando%20un%20desarrollador,%20quisiera%20que%20nos%20contactemos&app_absent=0"> Federico Leiva</a></TextoCopy></Copy>
        </FooterPage>
    );
}
 
export default Footer;