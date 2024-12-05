import React, { useState } from 'react';
import { useSamples } from './context/SampleContext';
import {
  Alignment,
  CardTitle,
  LayoutBox,
  NavButton,
  RightStyledBox,
  StyledImage,
  StyledPadding,
  StyledPara,
  TalkContainer,
} from '../customStyles';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { fadeUpSlowly, slideRightToLeft } from '../utils/motion';
import {Loaders} from '../utils/Loader';
import { MdOutlineMenu } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";


function Chat() {
  const { selectedSample, isChatVisible, setSidebarShow, setIsChatVisible } = useSamples();
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setSidebarShow(true);

  };

  return (
    <>
      <TalkContainer>
        <LayoutBox justifyContent="space-between">
          <NavButton
            style={{ width: '40px', height: '40px', margin: '15px 0px 40px 0px' }}
            onClick={toggleSidebar}
          >
            <MdOutlineMenu size={25} />
          </NavButton>

          {!isChatVisible &&
            <NavButton
              style={{ width: '40px', height: '40px', margin: '15px 0px 40px 0px' }}
              onClick={() => setIsChatVisible(true)


              }
            >
              <IoChevronBackOutline size={25} />
            </NavButton>
          }
        </LayoutBox>

        {isChatVisible ? (
          <StyledPadding>
            <motion.div
              variants={slideRightToLeft(0.2, 1)}
              initial="hidden"
              animate="show"
            >
              <RightStyledBox >
                <LayoutBox
                  justifyContent="space-between"
                  alignItems="center"
                  gap="10px"


                >
                  <CardTitle style={{ position: 'relative', top: '38px', color: "rgb(13 60 38)" }}>
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

            <motion.div
              variants={fadeUpSlowly(0.3, 1)}
              initial="hidden"
              animate="show"
            >
              <Alignment padding="0px 16px">
                <StyledPara>{selectedSample?.short_brief}</StyledPara>
              </Alignment>
            </motion.div>

            <Alignment padding="0px 16px 100px">
              {selectedSample?.description.length > 0 && (
                <ul>
                  {selectedSample.description.map((data, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpSlowly(0.3, 1)}
                      initial="hidden"
                      animate="show"
                    >
                      <li>
                        <StyledPara>{data}</StyledPara>
                      </li>
                    </motion.div>
                  ))}
                </ul>
              )}
            </Alignment>
          </StyledPadding>
        ) : (
          <StyledPadding>

            {chatHistory.map((entry, index) => (
              <LayoutBox
                key={index}

                justifyContent={entry.isUser ? 'flex-end' : 'flex-end'}

              >
                <Alignment
                  margin="10px 20px 10px 0px"
                  padding="10px"
                  style={{
                    background: entry.isUser ? '#e0f7fa' : '#f5eadc',
                    borderRadius: '12px',

                  }}
                >
                  <StyledPara

                    style={entry.isUser ? { fontStyle: 'italic', fontWeight: 'bold' } : {}}>
                    {entry.text}
                  </StyledPara>
                </Alignment>
              </LayoutBox>
            ))}


            {isLoading && (
              <LayoutBox justifyContent="left">
                <StyledPara><Loaders /></StyledPara>
              </LayoutBox>
            )}
          </StyledPadding>
        )}
      </TalkContainer>
      <Footer setChatHistory={setChatHistory} setIsLoading={setIsLoading} />
    </>
  );
}

export default Chat;
