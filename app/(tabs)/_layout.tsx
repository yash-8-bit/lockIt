import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { useFonts } from "expo-font"
import { useMyTheme } from '@/provider/MyThemeProvider';
export default function TabLayout() {
  const theme = useTheme();
  const theme2 = useMyTheme();
  useFonts({
    Bitter: require('@/assets/fonts/Bitter/Bitter-Medium.ttf'),
  });
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: theme2?.isLight ? theme.colors.primary : "black",
      headerShown: false,
      tabBarActiveBackgroundColor: theme2?.isLight ? "white" : "#bfbfbf3d",
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,

        }}

      />
    </Tabs>
  );
}
