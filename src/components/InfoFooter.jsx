import React from 'react'
import {Items} from '../style/styleFooter'
const InfoFooter = ({title,arr}) => 
    <Items>
        <b>{title}</b>
        <div>
            {arr.map((item,i) => <p key={i}>{item}</p>)}
        </div>
    </Items>

export default InfoFooter
