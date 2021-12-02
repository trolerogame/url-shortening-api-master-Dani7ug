import styled from 'styled-components'


export const Form = styled.form`
    width: calc(100% - 80px);
    max-width: 800px;
    padding:20px; 
    background: hsl(257, 27%, 26%);
    border-radius:10px;
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-top:-80px;
    input,button{
        border-radius: 7px;
    }
    input{
        width: calc(100% - 20px);
        height:50px;
        border:none;
        outline:none;
        padding-left:20px;
        margin-bottom:10px;
        font-size:18px;
    }
    input::placeholder{
        font-weight: 600;
        color:hsl(257, 7%, 63%);
        font-size:18px;
    }
    button{
        margin:0;
        margin-top:10px;
        height: 50px;
        font-size:20px;
    }
`