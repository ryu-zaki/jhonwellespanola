import React, { createContext, ReactNode, useContext } from 'react'

interface ThemeProviderValues {
   theme: string,
   toggleTheme: () => void, highlightClr: string
}

const ComponentContext = createContext<ThemeProviderValues>({ theme: "", toggleTheme: () => {}, highlightClr: "" });
 
interface ThemeProviderProps {
    children: ReactNode,
}

const ThemeContext: React.FC<ThemeProviderProps> = ({children}) => {

  const [theme, setTheme] = React.useState<"Light" | "Dark">("Light");

  const toggleTheme = () => {
    setTheme(prev => prev === "Light" ? "Dark" : "Light");
  }

  const [highlightClr, setHighlightClr] = React.useState("");
  
  React.useEffect(() => {

setHighlightClr(theme === "Dark" ? "text-violet-light" : "text-violet-dark")

  }, [theme]);

  return (
    <ComponentContext.Provider value={{ theme, toggleTheme, highlightClr }}>
        
        {
            children
        }
    </ComponentContext.Provider>
  )
}

export const useTheme = (): ThemeProviderValues => {

    return useContext(ComponentContext);
    
}

export default ThemeContext