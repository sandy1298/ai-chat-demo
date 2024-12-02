import React, { useEffect, useState } from "react";
import {
  Alignment,
  FooterContainer,
  LayoutBox,
  StyledButton,
  StyledFooterTitle,
  StyledInput,
} from "../customStyles";
import { FaArrowUp } from "react-icons/fa";
;

const Footer = ({ setQuestion }) => {
  const [value, setValue] = useState("");

//   const showAnswer = () => {
//     const synth = window.speechSynthesis;
//     const voices = synth.getVoices();
//     console.log("voices", voices[3]);
//     const updatedValue = value?.toLowerCase();
//     const u = new SpeechSynthesisUtterance(CHATS?.[updatedValue]);
//     u.voice = voices[1];
//     u.pitch = 0.9;
//     u.rate = 1;
//     synth.speak(u);
//     setValue("");
//   };

  return (
    <FooterContainer>
      <LayoutBox justifyContent="center" alignItems="center">
        <StyledInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Talk with Pi"
        />
        <StyledButton
          className={!value ? "disable_search" : "enable_search"}
          onClick={() => {
            // showAnswer();
            setQuestion(value.toLowerCase());
          }}
        >
          {<FaArrowUp />}
        </StyledButton>
      </LayoutBox>
      <LayoutBox justifyContent="center">
        <StyledFooterTitle>
          By using Pi, you agree to our{" "}
          <span style={{ color: "#038247", textDecoration: "underline" }}>
            Terms
          </span>{" "}
          and{" "}
          <span style={{ color: "#038247", textDecoration: "underline" }}>
            Privacy Policy.
          </span>{" "}
        </StyledFooterTitle>
      </LayoutBox>
    </FooterContainer>
  );
};

export default Footer;
