import React, { createContext, useState, useContext } from "react";
import { Samples } from "../../db";



const SampleContext = createContext();

export const SamplesProvider = ({ children }) => {
  const [selectedSample, setSelectedSample] = useState(Samples?.result[0]);
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [sidebarshow, setSidebarShow] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const value = {
    selectedSample,
    setSelectedSample,
    samples: Samples,
    isChatVisible,
    setIsChatVisible,
    sidebarshow,
    setSidebarShow,
    isSmallScreen,
    setIsSmallScreen,
  };

  return (
    <SampleContext.Provider value={value}>
      {children}
    </SampleContext.Provider>
  );
};

export const useSamples = () => useContext(SampleContext);