import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
interface MyCardInterface {
  title: string,
  date: string,
}

export default function MyCard({ title, date }: MyCardInterface) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View>
        <IconButton
          icon="eye"
          size={20}
          onPress={() => { }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 1.2,
    borderWidth: 0.2,
    padding: 6,
    borderRadius: 4,
    borderColor: "gray",
    flexDirection: "row"
  },
  title: {
    fontSize: 26
  },
  date: {
    fontSize: 12
  }
})