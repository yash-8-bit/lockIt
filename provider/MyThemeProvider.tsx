import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface theme {
    isLight: boolean;
    change: () => void;
}

const ThemeContext = createContext<theme | null>(null);

function MyThemeProvider({ children }: PropsWithChildren) {

    const [isLight, setIsLight] = useState<boolean>(true);
    const change = async () => {
        setIsLight(!isLight);
        await AsyncStorage.setItem("theme", isLight ? "dark" : "light");
    }
    useEffect(() => {
        (async () => {
            const data = await AsyncStorage.getItem("theme") as "light" | "dark" | null;
            if (!data) {
                await AsyncStorage.setItem("theme", "light");
            }
            else {
                setIsLight(data === "light")
            } 
        })()
    }, [])
    return (
        <ThemeContext.Provider value={{ isLight, change }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default MyThemeProvider


export const useMyTheme = () => {
    const theme = useContext(ThemeContext);
    return theme;
}