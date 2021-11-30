import React from 'react'

const InfoFooter = ({title,arr}) => 
    <div>
        <b>{title}</b>
        <div>
            {arr.map((item,i) => <p key={i}>{item}</p>)}
        </div>
    </div>

export default InfoFooter
