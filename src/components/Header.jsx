import React from 'react'
import Logo from './Logo.jsx'
import {ContainHeader,ContainHamburgerLogin,InfoHeader,GetStarted,Info,HamburgerClose} from '../style/styleHeader'
const Header = ({close,setClose}) => {
    const infoItems = ['Features','Pricing','Resources']
    return (
        <ContainHeader>
            <Logo color='#34313D'/>
            <InfoHeader close={close}>
                <Info>
                    {infoItems.map((item,i) => <p key={i}>{item}</p>)}
                </Info>
                <ContainHamburgerLogin>
                    <p>Login</p>
                    <GetStarted>Sign Up</GetStarted>
                </ContainHamburgerLogin>
            </InfoHeader>
            <HamburgerClose close={close} onClick={() => setClose(!close)}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerClose>
        </ContainHeader>
    )
}

export default Header
