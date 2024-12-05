import React, { useState } from 'react';
import {
  FooterContainer,
  LayoutBox,
  StyledButton,
  StyledFooterTitle,
  StyledInput,
} from '../customStyles';
import { FaArrowUp } from 'react-icons/fa';
import { useSamples } from './context/SampleContext';
import { fetchResponseFromHuggingFace } from '../utils/api';

const Footer = ({ setChatHistory, setIsLoading }) => {
  const [value, setValue] = useState('');
  const { setIsChatVisible } = useSamples();

  const handleFetchResponse = () => {
    if (!value.trim()) return;
    fetchResponseFromHuggingFace(value, setChatHistory, setIsLoading, setIsChatVisible);
    setValue(''); 
  };

  return (
    <FooterContainer>
      <LayoutBox justifyContent="center" alignItems="center">
        <StyledInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Talk with Pi"
        />
        <StyledButton
          disabled={!value.trim()}
          className={!value.trim() ? 'disable_search' : 'enable_search'}
          onClick={handleFetchResponse}
        >
          <FaArrowUp />
        </StyledButton>
      </LayoutBox>
      <LayoutBox justifyContent="center">
        <StyledFooterTitle>
          By using Pi, you agree to our{' '}
          <span style={{ color: '#038247', textDecoration: 'underline' }}>
            Terms
          </span>{' '}
          and{' '}
          <span style={{ color: '#038247', textDecoration: 'underline' }}>
            Privacy Policy
          </span>
          .
        </StyledFooterTitle>
      </LayoutBox>
    </FooterContainer>
  );
};

export default Footer;
