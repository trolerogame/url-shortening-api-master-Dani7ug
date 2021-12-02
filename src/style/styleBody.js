import styled from 'styled-components'


export const ContainIllustration = styled.div`
    img{
        width:100%;
        object-fit: cover;
        margin:25px 0 40px 80px;
    }
`

export const TextIllustration = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin:0 10px;
    h1{
        color:hsl(257, 27%, 26%);
        font-weight: 600;
        font-size:40px;
        margin:0 40px;
    }
    p{
        margin:10px 40px 30px 40px;
        color:hsl(257, 7%, 63%);
        font-weight: 600;
    }
    button{
        width: 130px;
    }
`

export const ContainMainText = styled.div`
    background:rgb(240,241,246);
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:170px;
`

export const ContainAdvanced = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:50px 0 0 0;
    position: relative;
    &::after{
        content: "";
        display:block;
        width: 10px;
        height: calc(100% - 80px);
        background-color:hsl(180, 66%, 49%);
        position: absolute;
        top:20px;
    }
    @media (min-width:1100px){
        flex-direction:row;
        margin:100px 0 200px 0;
        &::after{
            content: "";
            display:flex;
            width: calc(100% - 80px);
            height:10px;
            background-color:hsl(180, 66%, 49%);
            position: absolute;
            left:40px;
            top:calc(290px / 2);
        }
    }
`

export const Advanced = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background:#fff;
    width: 300px;
    height: 190px;
    border-radius:5px;
    margin:50px 0;
    padding:60px 20px 20px 20px;
    position: relative;
    z-index: 1;
    img{
        margin: 20px 0;
        background:hsl(257, 27%, 26%);
        padding:20px;
        border-radius:50%;
        position:absolute;
        top:-60px;
    }
    b{
        font-size:25px;
        color:hsl(257, 27%, 26%);
        font-weight: 600;
    }
    p{
        text-align:center;
        margin: 20px;
        font-size:18px;
    }
    @media (min-width:1100px){
        margin:0 40px;
        &:nth-child(2){
            transform:translateY(40px);
        }
        &:nth-child(3){
            transform:translateY(80px);
        }
        padding:80px 20px 20px 20px;
    }
`

export const AdvancedText = styled.div`
    margin:40px 40px;
    text-align:center;
    h3{
        font-size:38px;
        color:hsl(257, 27%, 26%);
        margin:0;
        margin-bottom:20px;
    }
    p{
        text-align:center;
        font-size:18px;
        color:  hsl(257, 7%, 63%);
        font-weight: 600;
        margin:0;
    }
    @media (min-width: 768px) {
    }
`

export const LinkShort = styled.div`
    background:#fff;
    width:300px;
    padding:20px;
    padding-top:0;
    margin:20px 0;
    border-radius:7px;
    button{
        margin:0;
        margin-top:10px;
        height: 40px;
        font-size:20px;
        border-radius:7px;
    }
    p{
        font-size:18px;
        color:hsl(255, 11%, 22%);
        font-weight: 600;
        position:relative;
        padding:15px 0;
    }
    p::after{
        content: '';
        display:block;
        position:absolute;
        bottom:0;
        left: -20px;
        width:340px;
        height:3px;
        background: rgb(240,241,246);
    }
    b{
        display:block;
        font-size:18px;
        color:hsl(180, 66%, 49%);
        font-weight: 600;
        margin-bottom:10px;
    }
    @media (min-width:762px) {
        display: flex;
        justify-content:space-between;
        align-items: center;
        width: calc(100% - 80px);
        max-width: 800px;
        height: 70px;
        padding-bottom:0;
        p::after{
            display:none;
        }
        b{
            margin:0 20px;
        }
        button{
            margin:0;
            width:100px;
        }
        div{
            display: flex;
            align-items: center;
        }
    }
`

export const ContainLinksShorts = styled.div`
    margin:30px 0;
    @media (min-width: 762px) {
        width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`