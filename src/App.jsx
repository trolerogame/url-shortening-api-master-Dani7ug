import React,{useState} from 'react'
import {GlobalStyle} from './style/styleGlobals'
import Header from './components/Header'
import Body from './components/Body'
import Boots from './components/Boots'
import Footer from './components/Footer'
function App() {
  const [close,setClose] = useState(false)
  return (
    <>
      <GlobalStyle/>
      <Header close={close} setClose={setClose}/>
      <Body/>
      <Boots/>
      <Footer/>
    </>
  )
}

export default App
