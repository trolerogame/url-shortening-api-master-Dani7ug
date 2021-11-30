import styled,{css} from 'styled-components'

export const ContainHeader = styled.header`
    display:flex;
    align-items:center;
    margin:10px 30px;
    position:relative;
    justify-content:space-between;
    svg{
        width:160px;
    }
    @media (min-width:762px){
        margin:10px 70px;
        justify-content:start;
    }
`

export const InfoHeader = styled.div`
    display:${props => props.close ? 'none' : 'flex'};
    color:#f2f2f2;
    flex-direction: column;
    position: absolute;
    bottom:-350px;
    right: 0;
    left:0;
    background:hsl(257, 27%, 26%);
    padding:20px 0;
    border-radius:10px;
    @media (min-width:762px){
        display:flex;
        width: 100%;
        position: relative;
        flex-direction: row;
        justify-content: space-between;
        bottom: 0;
        background:none;
    }
`
export const Info = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:0 20px;
    padding-bottom:20px;
    border-bottom: 1px solid rgba(200,200,200,0.2);
    p{
        margin: 0;
        padding:13px;
        color:#fff;
        font-weight: 600;
        cursor:pointer;
        transition:color .1s linear;
    }   
    p:hover{
        color:#1b1b1b;
    }
    @media (min-width: 762px){
        padding:0;
        flex-direction: row;
        p{
            color:hsl(257, 7%, 63%);
        }
    }
`
export const ContainHamburgerLogin = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:20px;
    button{
        width: 100%;
        border:none;
        outline:none;
        color:#fff;
        font-weight:500;
        height:40px;
        padding:10px 20px;
        margin:0 10px;
        border-radius:30px;
        background:hsl(180, 66%, 49%);
        cursor:pointer;
        transition: opacity .1s linear;
        font-weight: 600;
    }
    p{
        padding:0 10px;
        color:#fff;
        font-weight: 600;
        cursor:pointer;
    }   

    button:hover{
        opacity:.7;
    }
    @media (min-width:762px){
        margin:0;
        button{
            width:100px;
            
        }
        p{
            color:hsl(257, 7%, 63%);
        }

        font-size:17px;
        align-items: center;
        flex-direction: row;
    }

`
export const HamburgerClose = styled.button`
    border:none;
    outline:none;
    width:40px;
    height: 40px;
    background:none;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    cursor:pointer;
    transition: all .1s linear;
    span{
        display:block;
        width:100%;
        height:5px;
        background:hsl(0, 0%, 75%);
        transition: all .1s linear;
    }
    ${props => !props.close && css`
        span:nth-child(2){
            display:none;
        }
        span:first-child{
            transform: translateY(9px) rotate(-45deg);
        }
        span:nth-child(3){
            transform: translateY(-10px) rotate(45deg);
        }
    `}
    @media (min-width:762px){
        display:none;
    }
`