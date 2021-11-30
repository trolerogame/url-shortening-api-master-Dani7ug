import styled from 'styled-components'
import boostMobile from '../../public/bg-boost-mobile.svg'
import boostDesktop from '../../public/bg-boost-desktop.svg'


export const ContainFooter = styled.footer`
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#111;
    padding:50px 0;
    svg{
        padding-bottom:50px;
    }
    @media (min-width:762px){
        flex-direction:row;
        justify-content:space-around;
        align-items: start;
        padding:60px 50px 90px 100px;
        svg{
            margin-right: 300px;
        }
    }
    @media (max-width:1200px){
        svg{
            margin-right: 100px;
        }
    }
    @media (max-width:900px){
        svg{
            margin-right: 0px;
        }
    }
`
export const Items = styled.div`
    text-align: center;
    margin:20px 0;
    b{
        display:block;
        color:#f2f2f2;
        font-weight: 600;
        margin-bottom:20px;
    }
    p{
        color:hsl(257, 7%, 63%);
        cursor: pointer;
        font-weight: 600;
        transition: color .1s linear;
        margin:10px 0;
    }
    p:hover{
        color:hsl(180, 66%, 49%);
    }
    @media (min-width:762px){
        margin:0;
        text-align: start;
    }
`

export const SocialNetworks = styled.div`
    margin-top:20px;
    img{
        margin:0 20px;
        cursor:pointer;
    }
    @media (min-width:762px){
        margin:0;
    }
`

export const ContainBoots = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background:hsl(257, 27%, 26%) url(${boostMobile}) no-repeat;
    background-size:cover;
    height: 300px;
    h2{
        color:#f2f2f2;
    }
    button{
        width:140px;
    }
    @media (min-width:762px){
        background-image: url(${boostDesktop});
        height: 260px;
        h2{
            font-size:30px;
        }
    }
`