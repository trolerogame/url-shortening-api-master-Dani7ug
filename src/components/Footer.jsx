import React from 'react'
import Logo from './Logo'
import InfoFooter from './InfoFooter'
import facebook from '../../public/icon-facebook.svg'
import twitter from '../../public/icon-twitter.svg'
import pinterest from '../../public/icon-pinterest.svg'
import instagram from '../../public/icon-instagram.svg'
import {ContainFooter} from '../style/styleFooter'
const Footer = () => 
    <ContainFooter>
        <Logo color="#fefefe"/>
        <InfoFooter title='Features' arr={['Link Shortening','Branded Links','Analytics']}/>
        <InfoFooter title='Resources' arr={['Blog','Developers','Support']}/>
        <InfoFooter title='Company' arr={['About','Our Team','Careers','Contact']}/>
        <div>
          {[facebook,twitter,pinterest,instagram].map((item,i) => 
            <img src={item} alt="" key={i} />
          )}  
        </div>
    </ContainFooter>

export default Footer
