
import MyThemeProvider, { useMyTheme } from '@/provider/MyThemeProvider';
import { myDarkTheme, myLightTheme } from '@/style/themes';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

const Layout = () => {
  const theme = useMyTheme();
  return (
    <PaperProvider  theme={theme?.isLight ? myLightTheme : myDarkTheme}>
     <Stack>
          <Stack.Screen  name="(tabs)" options={{ headerShown: false }} />
        </Stack> 
    </PaperProvider>
  )
}

export default function RootLayout() {

  return (
    <>
      <MyThemeProvider>
        <Layout />
      </MyThemeProvider>
    </>);
}
