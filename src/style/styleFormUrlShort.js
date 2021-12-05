import styled from 'styled-components'
import bgShortenMobile from '../../public/bg-shorten-mobile.svg'
import bgShortenDesktop from '../../public/bg-shorten-desktop.svg'

export const Form = styled.form`
    width: calc(100% - 100px);
    padding:30px;
    background: hsl(257, 27%, 26%) url(${bgShortenMobile}) no-repeat;
    border-radius:10px;
    background-position:100% 0;
    background-size:60%;
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-top:-80px;
    input,button{
        border-radius: 5px;
    }
    div{
        width: 100%;
        margin-bottom:20px;
        position: relative;
    }
    input{
        width: calc(100% - 20px);
        height:50px;
        outline:${props => props.empty ? '3px solid hsl(0, 87%, 67%)' : 'none'};
        border:none;
        padding-left:20px;
        margin-bottom:10px;
        font-size:18px;
        transition:border .1s linear;
    }
    p{
        color:hsl(0, 87%, 67%);
        margin:0;
        font-weight: 600;
        position:absolute;
        bottom:-20px;
    }
    input::placeholder{
        font-weight: 600;
        color:${props => props.empty ? 'hsl(0, 87%, 67%)' : 'hsl(257, 7%, 63%)'};
        font-size:18px;
        transition:color .1s linear;
    }
    button{
        margin:0;
        margin-top:10px;
        height: 50px;
        font-size:20px;
    }
    @media (min-width:762px){
        flex-direction:row;
        align-items:center;
        padding:50px 40px;
        max-width: calc(100% - 200px);
        margin-top:-56px;
        background-image: url(${bgShortenDesktop});
        background-size:cover;
        background-position:0;
        button{
            width:200px;
        }
        div,input,button{
            margin:0;
        }
        div,button{
            margin:0 10px;
        }
        p{
            bottom:-30px;
        }
    }
    @media (min-width:1020){
        max-width: calc(100% - 380px);
    }
`