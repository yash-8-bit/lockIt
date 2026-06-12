import { useMyTheme } from '@/provider/MyThemeProvider'
import { about_para } from '@/static/main'
import React from 'react'
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, useTheme, Divider, Switch } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

function about() {
  const theme = useMyTheme();
  const theme2 = useTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme2.colors.background }]}>

      <View style={{ flex: 1, gap: 12 }}>
        <View style={{ gap: 2 }}>
          <Text style={[styles.font, { textDecorationLine: "underline" }]}>About This App :</Text>
          <Text style={{ lineHeight: 24, fontFamily: "serif", fontStyle: "italic" }}>{about_para}</Text>
        </View>
        <Divider />
        <View style={{ gap: 2, flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.font]}>Switch Theme :</Text>
          <Switch color='#CA6924' value={theme?.isLight} onValueChange={theme?.change} />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 2 }}>
        <Text style={[styles.font]}>Made by</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://yash-the-one.vercel.app")}>
          <Text style={[styles.font, { textDecorationLine: "underline", color: "red" }]}>Yash</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  font: {
    fontFamily: "Bitter"
  }
})

export default about