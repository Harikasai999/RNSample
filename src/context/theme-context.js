import React from 'react'
import { Appearance, useColorScheme } from 'react-native-appearance';
Appearance.getColorScheme();
const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'white',
        statusBar: "light-content"
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
        borderColor: 'black',
        statusBar: "dark-content"
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(false) // Default theme is light
    const colorScheme = useColorScheme();
    // console.log(colorScheme, "=colorScheme====")
    // On mount, read the preferred theme from the persistence
    React.useEffect(() => {

        if (colorScheme === "dark") {
            setDark(true)
        } else {
            setDark(false)
        }
    }, [])

    // To toggle between dark and light modes
    const toggle = () => {

        const isDark = !dark
        console.log(isDark, "darkdarkdarkdark---")
        // localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }

    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
