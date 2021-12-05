import{W as h,R as e,s as r,C as f,r as p,a as b}from"./vendor.8fe9410d.js";const w=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};w();const v=h`
    body{
        font-family: 'Source Sans Pro', sans-serif;
        margin:0;
        padding:0;
        box-sizing: border-box;
        overflow-x: hidden;
    }
`;var u=({color:t})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"121",height:"33"},e.createElement("path",{fill:t,d:"M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"}));const y=r.header`
    display:flex;
    align-items:center;
    margin:10px 30px;
    position:relative;
    justify-content:space-between;
    svg{
        width:160px;
    }
    @media (min-width:762px){
        justify-content:start;
    }
    @media (min-width:1250px){
        margin:10px 150px;
    }
`,E=r.div`
    display:${t=>t.close?"none":"flex"};
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
`,k=r.div`
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
`,d=r.button`
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
    &:hover{
        opacity:.7;
    }
`,z=r.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:20px;
    p{
        padding:0 10px;
        color:#fff;
        font-weight: 600;
        cursor:pointer;
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

`,S=r.button`
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
    ${t=>!t.close&&f`
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
`,C=({close:t,setClose:a})=>{const o=["Features","Pricing","Resources"];return e.createElement(y,null,e.createElement(u,{color:"#34313D"}),e.createElement(E,{close:t},e.createElement(k,null,o.map((s,n)=>e.createElement("p",{key:n},s))),e.createElement(z,null,e.createElement("p",null,"Login"),e.createElement(d,null,"Sign Up"))),e.createElement(S,{close:t,onClick:()=>a(!t)},e.createElement("span",null),e.createElement("span",null),e.createElement("span",null)))},j=r.div`
    img{
        width:100%;
        object-fit: cover;
        margin:25px 0 40px 80px;
    }
    @media (min-width:762px){
        display:flex;
        flex-direction: row-reverse;
        align-items: center;
        margin-left: 40px;

        img{
            width:500px;
        }
    }
    @media (min-width:1000px){
        margin-left:70px;
        img{
            width:600px;
        }
    }
    @media (min-width:1250px){
        margin-left:150px;
        img{
            width:700px;
        }
    }
`,L=r.div`
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
        text-align:center;
    }
    button{
        width: 130px;
    }
    @media (min-width:762px){
        width: 100%;
        align-items: start;
        margin:0;
        margin-right:10px;
        h1,p,button{
            margin:10px 0;
        }
        p{
            text-align:start;
        }
        h1{
            font-size:30px;
            text-align: start;
            font-weight:1000;
        }
    }
    @media(max-width:1030px){
        h1{
            font-size:50px; 
        }
    }
`,B=r.div`
    background:rgb(240,241,246);
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:170px;
`,I=r.div`
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
`,M=r.div`
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
`,V=r.div`
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
`,F=r.div`
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
        transition: background .1s linear;
        background-color:${t=>t.copied==="true"?"hsl(260, 8%, 14%)":"hsl(180, 66%, 49%)"}
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
`,$=r.div`
    margin:30px 0;
    @media (min-width: 762px) {
        width: calc(100% - 260px);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;var A="/url-shortening-api-master-dani7ug/assets/illustration-working.fae884c2.svg",P=[{id:1,img:"../public/icon-brand-recognition.svg",title:"Brand Recognition",text:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content."},{id:2,img:"../public/icon-detailed-records.svg",title:"Detailed Records",text:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."},{id:3,img:"../public/icon-fully-customizable.svg",title:"Fully Customizable",text:"  Improve brand awareness and content discoverability through customizablelinks, supercharging audience engagement."}],R="/url-shortening-api-master-dani7ug/assets/bg-shorten-mobile.53ca2a05.svg",U="/url-shortening-api-master-dani7ug/assets/bg-shorten-desktop.d119628f.svg";const D=r.form`
    width: calc(100% - 100px);
    padding:30px;
    background: hsl(257, 27%, 26%) url(${R}) no-repeat;
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
        outline:${t=>t.empty?"3px solid hsl(0, 87%, 67%)":"none"};
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
        color:${t=>t.empty?"hsl(0, 87%, 67%)":"hsl(257, 7%, 63%)"};
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
        background-image: url(${U});
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
`,T=({shortsUrls:t,setShortsUrls:a})=>{const o=p.exports.useRef(null),[s,n]=p.exports.useState(!1),i=async l=>{l.preventDefault();const c=o.current.value;if(!c)return n(!0);try{const x=(await(await fetch(`https://api.shrtco.de/v2/shorten?url=${c}`)).json()).result.full_short_link;a([...t,{url:c,shortUrl:x}]),n(!1)}catch{n(!0)}o.current.value=""};return e.createElement(D,{empty:s,onSubmit:i},e.createElement("div",null,e.createElement("input",{ref:o,type:"text",placeholder:"Shorten a link here..."}),s&&e.createElement("p",null,"Please add a link")),e.createElement(d,null,"Shorten It!"))},G=({shortsUrls:t,setShortsUrls:a})=>{const[o,s]=p.exports.useState(null),n=(i,l)=>{navigator.clipboard.writeText(l),s(i)};return e.createElement("main",null,e.createElement(j,null,e.createElement("img",{src:A,alt:""}),e.createElement(L,null,e.createElement("h1",null,"More Than just shorter links"),e.createElement("p",null,"Build your brand\u2019s recognition and get detailed insights on how your links are performing."),e.createElement(d,null,"Get Started"))),e.createElement(B,null,e.createElement(T,{shortsUrls:t,setShortsUrls:a}),e.createElement($,null,t.map((i,l)=>e.createElement(F,{key:l,copied:o==l&&o!==null?"true":"false"},e.createElement("div",null,e.createElement("p",null,i.url)),e.createElement("div",null,e.createElement("b",null,i.shortUrl),e.createElement(d,{onClick:()=>n(l,i.shortUrl)},o==l&&o!==null?"Copied!":"Copy"))))),e.createElement(V,null,e.createElement("h3",null,"Advanced Statistics"),e.createElement("p",null,"Track how your links are performing across the web with our advanced statistics dashboard.")),e.createElement(I,null,P.map(({id:i,img:l,title:c,text:g})=>e.createElement(M,{key:i},e.createElement("img",{src:l,alt:""}),e.createElement("b",null,c),e.createElement("p",null,g))))))};var O="/url-shortening-api-master-dani7ug/assets/bg-boost-mobile.683c4474.svg",H="/url-shortening-api-master-dani7ug/assets/bg-boost-desktop.05593952.svg";const N=r.footer`
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
`,Y=r.div`
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
`,K=r.div`
    margin-top:20px;
    img{
        margin:0 20px;
        cursor:pointer;
    }
    @media (min-width:762px){
        margin:0;
    }
`,W=r.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background:hsl(257, 27%, 26%) url(${O}) no-repeat;
    background-size:cover;
    height: 300px;
    h2{
        color:#f2f2f2;
    }
    button{
        width:140px;
    }
    @media (min-width:762px){
        background-image: url(${H});
        height: 260px;
        h2{
            font-size:30px;
        }
    }
`,_=()=>e.createElement(W,null,e.createElement("h2",null,"Boots your links today"),e.createElement(d,null,"Get Started")),m=({title:t,arr:a})=>e.createElement(Y,null,e.createElement("b",null,t),e.createElement("div",null,a.map((o,s)=>e.createElement("p",{key:s},o))));var q="/url-shortening-api-master-dani7ug/assets/icon-facebook.1250d8fd.svg",J="/url-shortening-api-master-dani7ug/assets/icon-twitter.2da5de02.svg",Q="/url-shortening-api-master-dani7ug/assets/icon-pinterest.44129f48.svg",X="/url-shortening-api-master-dani7ug/assets/icon-instagram.7a970678.svg";const Z=()=>e.createElement(N,null,e.createElement(u,{color:"#fefefe"}),e.createElement(m,{title:"Features",arr:["Link Shortening","Branded Links","Analytics"]}),e.createElement(m,{title:"Resources",arr:["Blog","Developers","Support"]}),e.createElement(m,{title:"Company",arr:["About","Our Team","Careers","Contact"]}),e.createElement(K,null,[q,J,Q,X].map((t,a)=>e.createElement("img",{src:t,alt:"",key:a}))));function ee(){const[t,a]=p.exports.useState(!0),[o,s]=p.exports.useState([]);return e.createElement(e.Fragment,null,e.createElement(v,null),e.createElement(C,{close:t,setClose:a}),e.createElement(G,{shortsUrls:o,setShortsUrls:s}),e.createElement(_,null),e.createElement(Z,null))}b.render(e.createElement(e.StrictMode,null,e.createElement(ee,null)),document.getElementById("root"));
