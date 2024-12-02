import React from 'react'
import msg_icon from '../assets/chat.svg'
import { useSamples } from './context/SampleContext';
import { fadeIn, slideIn } from '../utils/motion';
import { motion } from 'framer-motion';
import {
  Alignment,
  CardTitle,
  DiscoverContainer,
  LayoutBox,
  NavButton,
  ParentContainer,
  StyledBox,
  StyledContainer,
  StyledImage,
  StyledTitle,
} from "../customStyles";
import { RxCross2 } from "react-icons/rx";
import { FaUserLarge } from "react-icons/fa6";



function LeftSideBar() {
 

    const greet = () => {
        const timeNow = new Date()?.getHours();
        return timeNow >= 5 && timeNow < 12
          ? "Good Morning"
          : timeNow >= 12 && timeNow < 18
          ? "Good Afternoon"
          : "Good evening";
      };

      const { samples, setSelectedSample } = useSamples();


      const getCard = (index, content) => {
        if (index === 2 || index === 4 || index === 10) {
          return (
            <StyledBox
              onClick={() => {
               
                setSelectedSample(content);
              }}
            >
              <LayoutBox
                justifyContent="space-between"
                alignItems="center"
                gap="10px"
              >
                <CardTitle style={{ position: "relative", top: "38px" }}>
                  {content?.title}
                </CardTitle>
                <StyledImage
                  src={content?.image}
                  alt={content?.title}
                  className="style-flexitem-image"
                />
              </LayoutBox>
            </StyledBox>
          );
        } else {
          return (
            <StyledContainer
              style={{ position: "relative" }}
              onClick={() => {
                setSelectedSample(content);
              }}
            >
              <CardTitle
                className="white-title"
                style={{ position: "absolute", bottom: "0px", left: "10px" }}
              >
                {content?.title}
              </CardTitle>
              <StyledImage
                src={content?.image}
                alt={content?.title}
                className={
                  index !== 3 && index !== 7 && index !== 11 && index !== 15
                    ? "small-image"
                    : "big-image"
                }
              />
            </StyledContainer>
          );
        }
      };
  return (
    <ParentContainer>
    <DiscoverContainer>
      <LayoutBox justifyContent="space-between">
        <NavButton>
          <RxCross2 size={18} />
        </NavButton>
        <NavButton>
          <FaUserLarge size={18} />
        </NavButton>
      </LayoutBox>
      <Alignment margin="20px 16px">
        {<StyledTitle>{greet()}, <i>Sandy</i></StyledTitle>}
      </Alignment>

      <div className="grid-container">
          {Object.entries(samples || {}).map(([_, data]) => {
            if (!Array.isArray(data)) return null; 
            return data.map((content, index) => {
              return <div key={index}>{getCard(index, content)}</div>;
            });
          })}
        </div>
    </DiscoverContainer>
  </ParentContainer>
  )
}

export default LeftSideBar
