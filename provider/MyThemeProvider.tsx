import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

interface theme {
    isLight: boolean;
    change: () => void;
}

const ThemeContext = createContext<theme | null>(null);

function MyThemeProvider({ children }: PropsWithChildren) {
    const [isLight, setIsLight] = useState<boolean>(true);
    const change = () => {
        setIsLight(!isLight);
    }
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