import React, { useState } from 'react'
import { useSamples } from './context/SampleContext';
import {
  Alignment,
  CardTitle,
  Icon,
  LayoutBox,
  NavButton,
  StyledBox,
  StyledImage,
  StyledPadding,
  StyledPara,
  TalkContainer,
} from "../customStyles";
import Footer from './Footer';


function Chat() {
    const { selectedSample } = useSamples();

  const [speech, setSpeech] = useState(null);

  

  return (
    <>
    <TalkContainer>
    <NavButton
     
      style={{ width: "24px", margin: "24px 0px 0px 12px" }}
    >
      {/* <Icon src={back} alt="cta1" /> */}
    </NavButton>
    {!speech ? (
      <StyledPadding>
        <StyledBox>
          <LayoutBox
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
          >
            <CardTitle style={{ position: "relative", top: "38px" }}>
              {selectedSample?.title}
            </CardTitle>
            <StyledImage
              src={selectedSample?.image}
              alt={selectedSample?.title}
              className="style-main-image"
            />
          </LayoutBox>
        </StyledBox>
        
        <Alignment padding="0px 16px">
          <StyledPara>{selectedSample?.short_brief}</StyledPara>
        </Alignment>
        <Alignment padding="0px 16px 100px">
          {selectedSample?.description.length > 0 &&
          <ul>
            {selectedSample?.description?.map((data, index) => {
              return (
                <>
                  <li>
                    <StyledPara>{data}</StyledPara>
                  </li>
                </>
              );
            })}
          </ul>
}
        </Alignment>
      </StyledPadding>
    ) : (
      <StyledPadding>
        <LayoutBox justifyContent="flex-end">
          <Alignment
            margin="40px 20px 0px 0px"
            padding="0px 10px"
            style={{ background: "#f5eadc", borderRadius: "12px" }}
          >
            {/* <StyledPara style={{ lineHeight: "0rem" }}>{speech}</StyledPara> */}
          </Alignment>
        </LayoutBox>
        <LayoutBox justifyContent="flex-start">
          <Alignment
            margin="10px 0px 0px 20px"
            padding="0px 10px"
            style={{
              background: "#f5eadc",
              borderRadius: "12px",
              maxWidth: "210px",
            }}
          >
            {/* <StyledPara>{CHATS?.[speech]}</StyledPara> */}
          </Alignment>
        </LayoutBox>
      </StyledPadding>
    )}
  </TalkContainer>
  <Footer  />
  </>
  )
}

export default Chat
