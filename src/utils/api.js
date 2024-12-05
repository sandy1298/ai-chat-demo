import axios from 'axios';

const API_URL = 'https://api-inference.huggingface.co/models/gpt2';
const apikey = import.meta.env.VITE_APP_API_KEY

export const fetchResponseFromHuggingFace = async (question, setChatHistory, setIsLoading, setIsChatVisible) => {
  const headers = {
    Authorization: `Bearer ${apikey}`,
    'Content-Type': 'application/json',
  };
  const data = { inputs: question };

  try {
    setIsChatVisible(false);
    setIsLoading(true); 

    
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: question, isUser: true },
    ]);

    const response = await axios.post(API_URL, data, { headers });
    const generatedText = response?.data?.[0]?.generated_text || 'No response';

    
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: generatedText, isUser: false },
    ]);
  } catch (error) {
    console.error('Error fetching response from Hugging Face API:', error);

   
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: "Sorry, I couldn't fetch the response at this time.", isUser: false },
    ]);
  } finally {
    setIsLoading(false); 
  }
};
