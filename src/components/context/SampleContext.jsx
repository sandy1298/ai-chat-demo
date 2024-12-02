import React, { createContext, useState, useContext } from "react";
import { Samples } from "../../db";



const SampleContext = createContext();

export const SamplesProvider = ({ children }) => {
  const [selectedSample, setSelectedSample] = useState(Samples?.result[0]);

  const value = {
    selectedSample,
    setSelectedSample,
    samples: Samples,
  };

  return (
    <SampleContext.Provider value={value}>
      {children}
    </SampleContext.Provider>
  );
};

export const useSamples = () => useContext(SampleContext);