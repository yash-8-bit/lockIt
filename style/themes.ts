import {  MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper";



export const myLightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1591DC'
  },
  roundness: 1,
};


export const myDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "rgba(221, 221, 221, 1)",
    
  },
  roundness: 1
};