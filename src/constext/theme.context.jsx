import React,{useState,useEffect,createContext} from 'react'

const ThemeContext = createContext()

function Themeprovider({children}) {

    const [darkMode,setdarkMode] = useState(true)
    const Theme_key = 'theme'

    useEffect(() =>{
        const savedTheme = localStorage.getItem(Theme_key)
        if(savedTheme !== null){
            setdarkMode(savedTheme == 'true')
            return
        }

        const isSystemdark =window.matchMedia( 
            '(prefers-color-scheme : dark)'
        ).matches
        setdarkMode(isSystemdark === true)
        console.log(isSystemdark)
    },[])

    useEffect(() => {
  localStorage.setItem(Theme_key, darkMode);
}, [darkMode]); // save changes

  return (
    <ThemeContext.Provider value={{darkMode,setdarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {Themeprovider} 
export default ThemeContext