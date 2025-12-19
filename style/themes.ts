import { MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper";

export const myLightTheme : MD3Theme= {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#8ABEB9',
    
  },
   roundness : 1
};


export const myDarkTheme : MD3Theme= {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors
  },
    roundness : 1
};