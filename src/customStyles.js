import styled from "styled-components";

export const ParentContainer = styled.div`
  border-right: 1px solid rgb(237 225 209);
  @media only screen and (max-width: 900px) {
    background: #c3b9ab;
    height: 100vh;
    border: none;
  }
`;

export const Wrapper = styled.div`
  background: #faf3ea;
  height: 100vh;
`;

export const DiscoverContainer = styled.div`
  background: #f7efe3;
  position: relative;
  top: 0px;
  height: 100vh;
  @media only screen and (max-width: 762px) {
    border-radius: 24px;
    top: 16px;
    width: 100vw;
  }
  @media only screen and (min-width: 762px) and (max-width: 1000px) {
    padding: 0px 16px;
  }
`;

export const Alignment = styled.div(({ margin, padding }) => ({
  margin,
  padding,
}));

export const LayoutBox = styled.div(
  ({ justifyContent, alignItems, gap, flexDirection }) => ({
    display: "flex",
    justifyContent,
    alignItems,
    gap,
    flexDirection: flexDirection ?? "row",
  })
);

export const NavButton = styled.div`
  background: #ede1d1;
  border: 1px solid #e5e7eb;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 16px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const StyledTitle = styled.h4`
  @media only screen and (min-width: 768px) {
    margin: 32px 0px 12px;
    color: #0d3c26;
    font-family: math;
    font-weight: 900;
  }
  font-size: 2.125rem;
  line-height: 2.125rem;
  letter-spacing: -0.68px;
  font-weight: 350;
  font-family: var(--font-alpina-condensed), var(--font-alpina), ui-serif,
    Georgia, Cambria, "Times New Roman", Times, serif;
`;

export const StyledPara = styled.h4`
  font-size: 1.225rem;
  line-height: 2rem;
  letter-spacing: -0.68px;
  font-weight: 350;
  font-family: var(--font-alpina-condensed), var(--font-alpina), ui-serif,
    Georgia, Cambria, "Times New Roman", Times, serif;
`;

export const CardContainer = styled.div(({ height, width }) => ({
  height,
  width,
  overflow: "hidden",
}));

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 24px;
  &.small-image {
    height: 158px;
  }
  &.big-image {
    height: 318px;
  }

  &.style-flexitem-image {
    height: 134px;
    width: 134px;
  }

  &.style-main-image {
    height: 181px;
    width: 271px;
  }
`;

export const StyledType2Image = styled.div`
  img {
    height: 134px;
    width: 134px;
    border-radius: 24px;
  }
`;

export const Title = styled.h4`
  img {
    height: 158px;
    width: 161px;
    border-radius: 24px;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.1875rem;
  letter-spacing: -0.19px;
  letter-spacing: -0.68px;
  font-weight: 900;
  font-family: math;

  &.white-title {
    color: white;
  }
`;

export const StyledInput = styled.input`
  padding: 16px 60px 16px 16px;
  width: 100%;
  border-radius: 24px;
  font-size: 20px;
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  size: 100px;
  &:hover {
    border: 1px solid brown;
  }
  &:focus {
    border: 1px solid brown;
  }

  @media only screen and (min-width: 768px) {
    width: 65%;
    margin-left: 0px;
    margin-right: 13%;
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  position: relative;
  right: 54px;
  @media only screen and (min-width: 768px) {
    right: 178px;
    justify-content: center;
    align-items: center;
  }
  &.disable_search {
    background: #faf3ea;
    border-radius: 50%;
    padding: 10px 12px;
    opacity: 0.2;
  }
  &.enable_search {
    background: #038247;
    color: white;
    border-radius: 50%;
    padding: 10px 12px;
    animation: fadeIn 1s;
    @keyframes fadeIn {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.8;
      }
      75% {
        opacity: 0.9;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const FooterContainer = styled.div`
  background: #faf3ea;
  width: 70%;
  position: fixed;
  bottom: 0px;
  margin-left: 18px;
  padding: 12px 10px;
  @media only screen and (max-width: 900px) {
    background: #faf3ea;
    bottom: 0px;
    width: 100%;
    height: 100px;
    right: -30px;
  }
`;

export const StyledFooterTitle = styled.h4`
  font-size: 14px;
  color: #6b6255;
  position: relative;
  right: 60px;
  @media only screen and (max-width: 900px) {
    right: 18px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SidebarIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const SidebarTitle = styled.p`
  font-size: 0.9rem;
  letter-spacing: -0.68px;
  font-weight: 400;
  margin: 4px;

  &.active {
    font-weight: 550;
  }
`;

export const SidebarContainer = styled.div`
  display: block;
  padding: 12px;
  border-right: 1px solid rgb(237 225 209);
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SecondCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileContainer = styled.div`
  display: block;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const TalkContainer = styled.div`
  margin: 80px 100px;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const ScrollContainer = styled.div`
  display: block;
  height: 100vh;
  &.left {
    overflow-y: scroll;
  }
  &.right {
    overflow-y: scroll;
    flex: 2;
  }

  @media only screen and (max-width: 762px) {
    &.right {
      overflow-y: scroll;
      flex-grow: 0;
    }
  }

  @media only screen and (min-width: 762px) and (max-width: 1000px) {
    &.left {
      overflow-y: scroll;
      flex-grow: 2;
    }

    &.right {
      overflow-y: scroll;
      display: none;
    }
  }
`;

export const StyledPadding = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 0px;
  }
`;

export const StyledBox = styled.div`
  padding: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 24px;
  &:hover {
    scale: 0.9;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const StyledContainer = styled.div`
  &:hover {
    scale: 0.9;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    position: absolute;
    opacity: 0.9;
  }
`;
