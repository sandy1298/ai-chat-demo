import React, { useState } from 'react'
import { useSamples } from './context/SampleContext';
import {
  Alignment,
  CardTitle,
  Icon,
  LayoutBox,
  NavButton,
  RightStyledBox,
  StyledImage,
  StyledPadding,
  StyledPara,
  TalkContainer,
} from "../customStyles";
import Footer from './Footer';
import { motion } from 'framer-motion';
import { fadeUpSlowly, slideRightToLeft } from '../utils/motion';


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
          <motion.div  variants={slideRightToLeft(0.2, 1)}
               initial="hidden"
                animate="show"
              > 
        <RightStyledBox>
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
        </RightStyledBox>
        </motion.div>
        <motion.div variants={fadeUpSlowly(0.3, 1)}
               initial="hidden"
                animate="show"
              > 
        <Alignment padding="0px 16px">
          <StyledPara>{selectedSample?.short_brief}</StyledPara>
        </Alignment>
        </motion.div>
        <Alignment padding="0px 16px 100px">
          {selectedSample?.description.length > 0 &&
          <ul>
            {selectedSample?.description?.map((data, index) => {
              return (
                <>
                  <motion.div variants={fadeUpSlowly(0.3, 1)}
               initial="hidden"
                animate="show"
              > 
                  <li>
                <StyledPara>{data}</StyledPara>
              
                  </li>
                  </motion.div>
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
