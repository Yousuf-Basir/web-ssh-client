import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LoadWasm } from './LoadWasm/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadWasm>
      <App />
    </LoadWasm>
  </StrictMode>,
)
