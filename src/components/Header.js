import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logo5.png'

import {NavLink} from 'react-router-dom';

import Drawer from './Drawer';

const Navbar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* background: red; */
    position: fixed;
    z-index: 3;
`

const ContainerLinks = styled.div`
    display: none;
    @media (min-width: 1160px) {
        display: flex;
    }
`

const ContainerLogo = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100%;
`

const Logo = styled.div`
    /* background: blue; */
    background-image: url(${logo});
    background-size: 100%;
    background-position: center center;
`    


// Nuestra fundadora/  la Capilla del Carmen/ espiritualidad/ Carisma/ contacto/ Causa de canonización

const Header = () => {
    const [scroll, setScroll] = useState(false);

    const changeScroll = () => {
        if(window.scrollY >= 80){
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', changeScroll);

    const location = window.location.href;

    return ( 
        <Navbar className={(scroll) ? "navbarActive" : "navbar"}  >
            <ContainerLogo>
                <Logo className={(scroll) ? "logoActive" : "logo"} />
            </ContainerLogo>
            <ContainerLinks>
                <NavLink to="/iglesiacarmen/inicio" className="link">Inicio</NavLink>
                <NavLink to="/iglesiacarmen/fundadora" className="link">Nuestra fundadora</NavLink>
                <NavLink to="/iglesiacarmen/capilla" className="link" >Capilla del Carmen</NavLink>
                <NavLink to="/iglesiacarmen/carisma-y-espiritualidad" className="link" >Carisma y Espiritualidad</NavLink>
                {/* <NavLink to="/c" className="link" >Carisma</NavLink> */}
                <NavLink to="/iglesiacarmen/causa-de-canonizacion" className="link" >Causa de canonización</NavLink>
                <NavLink to="/iglesiacarmen/videos" className="link" >Videos</NavLink>
                <NavLink to="/iglesiacarmen/contacto" className="link" >Contacto</NavLink>
            </ContainerLinks>
            <Drawer />
        </Navbar>
    );
}

// const path = window.location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length;

// for (let i = 0; i < menuLength; i++) {
//     if(menuItem[i].href === path){
//         console.log(menuItem.href)
//         menuItem[i].className = "active";
//     }
    
// }


// if(path === "/") {
//     document.getElementById('link1').className  = 'logo';
// }
 
export default Header;