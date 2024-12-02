import { useState } from 'react'
import './App.css'
import LeftSideBar from './components/LeftSideBar'
import { SamplesProvider } from './components/context/SampleContext'
import Chat from './components/Chat'
import {
  Alignment,
  HomeContainer,
  Icon,
  LayoutBox,
  MobileContainer,
  NavButton,
  ScrollContainer,
  StyledPara,
  TalkContainer,
  Wrapper,
} from "./customStyles";

function App() {
  

  return (
    <>
    
    <Wrapper>
      <HomeContainer>
       
        <ScrollContainer className="left">
          <LeftSideBar />
        </ScrollContainer>
        <ScrollContainer className="right">
          <Chat />
        </ScrollContainer>
      </HomeContainer>
    </Wrapper>
      
    </>
  )
}

export default App
