import { useSamples } from './context/SampleContext';
import { slideIn } from '../utils/motion';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import {
  Alignment,
  CardTitle,
  DiscoverContainer,
  LayoutBox,
  MenuBox,
  NavButton,
  ParentContainer,
  StyledBox,
  StyledContainer,
  StyledImage,
  StyledTitle,
} from "../customStyles";
import { RxCross2 } from "react-icons/rx";
import chat from '../assets/chat.svg'



function LeftSideBar() {


  const greet = () => {
    const timeNow = new Date()?.getHours();
    return timeNow >= 5 && timeNow < 12
      ? "Good Morning"
      : timeNow >= 12 && timeNow < 18
        ? "Good Afternoon"
        : "Good evening";
  };

  const { samples, setSelectedSample, setIsChatVisible, sidebarshow, setSidebarShow, isSmallScreen } = useSamples();


  const getCard = (index, content) => {
    if (index === 2 || index === 4 || index === 10) {
      return (
        <StyledBox
          onClick={() => {

            setSelectedSample(content);
            setIsChatVisible(true);
            setSidebarShow(false)
          }}
        >
          <LayoutBox
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
          >
            <CardTitle style={{ position: "relative", top: "38px", color: " rgb(13 60 38)" }}>
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
            setIsChatVisible(true);
            setSidebarShow(false)
          }}
        >
          <CardTitle
            className="white-title"
            style={{ position: "absolute", bottom: "0px", left: "10px" }}
          >
            {content?.title}
          </CardTitle>
          <LazyLoad height={100}>
            <StyledImage
              src={content?.image}
              alt={content?.title}
              className={
                index !== 3 && index !== 7 && index !== 11 && index !== 15
                  ? "small-image"
                  : "big-image"
              }
            />
          </LazyLoad>
        </StyledContainer>
      );
    }
  };
  return (
    <div className={`sidebar ${isSmallScreen && !sidebarshow ? "hidden" : "visible"}`}>
      <ParentContainer>
        <DiscoverContainer>

          <LayoutBox justifyContent="flex-end " onClick={() => setSidebarShow(false)}>
            <NavButton >
              <RxCross2 size={20} />
            </NavButton>

          </LayoutBox>
          <Alignment margin="20px 16px">
            {<StyledTitle>{greet()}, <i>Sandy</i></StyledTitle>}
          </Alignment>

          <Alignment margin="20px 14px">
            <MenuBox>
              <LayoutBox alignItems="center" gap="20px" flexDirection="row">
                <img src={chat} width={50} className="image_chat" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <CardTitle style={{ color: "rgb(13 60 38)", fontSize: "29px", margin: 0 }}>
                    Download your Pi conversation history
                  </CardTitle>
                  <h6 className="text_aling" style={{ margin: "15px 0 0 0" }}>
                    Manage history
                  </h6>
                </div>

              </LayoutBox>
            </MenuBox>
          </Alignment>


          <div className="grid-container">
            {Object.entries(samples || {}).map(([_, data]) => {
              if (!Array.isArray(data)) return null;
              return data.map((content, index) => {
                return <div key={index}>
                  <motion.div variants={slideIn("left", "tween", 0.2, 1)}
                    initial="hidden"
                    animate="show"
                  >
                    {getCard(index, content)}
                  </motion.div>
                </div>;
              });
            })}
          </div>
        </DiscoverContainer>
      </ParentContainer>
    </div>
  )
}

export default LeftSideBar
