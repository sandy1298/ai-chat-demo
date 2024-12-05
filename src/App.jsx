import { useEffect, useState } from 'react'
import './App.css'
import LeftSideBar from './components/LeftSideBar'
import { useSamples } from './components/context/SampleContext'
import Chat from './components/Chat'
import {
  HomeContainer,
  ScrollContainer,
  Wrapper,
} from "./customStyles";
import { InitialLoader } from './utils/Loader'


function App() {

  const { setIsSmallScreen, isSmallScreen } = useSamples();

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 762);
    };


    handleResize();


    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (

        <InitialLoader />
      ) : (


        <Wrapper>
          <HomeContainer>

            <ScrollContainer className="left">
              <LeftSideBar isSmallScreen={isSmallScreen} />
            </ScrollContainer>
            <ScrollContainer className={isSmallScreen ? "left" : "right"}>
              <Chat />
            </ScrollContainer>
          </HomeContainer>
        </Wrapper>
      )}
    </>
  )
}

export default App
