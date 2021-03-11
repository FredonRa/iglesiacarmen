import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  li {
    padding: 25px 0;
  }
  @media (max-width: 1160px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    filter: ${({ open }) => open ? 'drop-shadow(-20px 0 10px rgba(0, 0, 0, 0.3))' : 'none'};
    top: -20px;
    /* left: 0; */
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 350px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      /* padding: 20px 0; */
      font-size: 20px;
      font-weight: 600;
      margin-left: -30px;
      background: #F9F9F9;
      
      border-radius: 10px;
    }
  }
`;

const A = styled.a`
    text-decoration: none;
    color: #2a2a2a;
    width: 80%;
    margin-bottom: 12px;
    /* width: 300px; */
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <A href="/iglesiacarmen/inicio"><li>Inicio</li></A>
      <A href="/iglesiacarmen/fundadora/"><li>Nuestra Fundadora</li></A>
      <A href="/iglesiacarmen/capilla"><li>Capilla del Carmen</li></A>
      <A href="/iglesiacarmen/carisma-y-espiritualidad"><li>Carisma y Espiritualidad</li></A>
      <A href="/iglesiacarmen/causa-de-canonizacion"><li>Causa de Canonización</li></A>
      <A href="/iglesiacarmen/contacto"><li>Contacto</li></A>
    </Ul>
  )
}

export default RightNav