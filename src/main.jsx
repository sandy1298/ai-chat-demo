import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SamplesProvider } from './components/context/SampleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SamplesProvider>
    <App />
    </SamplesProvider>
  </StrictMode>,
)
