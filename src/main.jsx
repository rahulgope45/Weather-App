import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './constext/theme.context.jsx'
import { Themeprovider } from './constext/theme.context.jsx'
import { WeatherProvider } from './constext/weather.context.jsx'

createRoot(document.getElementById('root')).render(
 <Themeprovider>
    <WeatherProvider>
     <App/>
    </WeatherProvider>
  
 </Themeprovider>
)
