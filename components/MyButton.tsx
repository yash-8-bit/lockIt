import { useMyTheme } from '@/provider/MyThemeProvider';
import { myFont } from '@/style/font'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Icon, Text, useTheme } from 'react-native-paper'

interface MyButtonInterface {
    onPress: () => void,
    icon: string,
    label: string;
}

function MyButton({ onPress, icon, label }: MyButtonInterface) {
    const theme2 = useTheme();
    const theme = useMyTheme();
    return (
        <TouchableOpacity style={{
            flex: 1, flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            backgroundColor: theme2.colors.primary,

            paddingVertical: 2,
            borderRadius: 1
        }} onPress={onPress}>
            <Icon color={ theme?.isLight ? "white" : "black" } size={12} source={icon} />
            <Text style={{ ...myFont, color: theme?.isLight ? "white" : "black" }} >{label}</Text>
        </TouchableOpacity>
    )
}

export default MyButton