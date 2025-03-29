import React, { createContext, ReactNode, useContext } from 'react'

interface ThemeProviderValues {
   theme: string,
   toggleTheme: () => void
}

const ComponentContext = createContext<ThemeProviderValues>({ theme: "", toggleTheme: () => {} });
 
interface ThemeProviderProps {
    children: ReactNode
}

const ThemeContext: React.FC<ThemeProviderProps> = ({children}) => {

  const [theme, setTheme] = React.useState<"Light" | "Dark">("Light");

  const toggleTheme = () => {
    setTheme(prev => prev === "Light" ? "Dark" : "Light");
  }

  return (
    <ComponentContext.Provider value={{ theme, toggleTheme }}>
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