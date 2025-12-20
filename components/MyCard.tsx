import { ItemsInterface } from '@/types/items.type';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function MyCard({ data, onOpen, onDelete }: {
  data: ItemsInterface,
  onOpen: () => void;
  onDelete: () => void;
}) {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 2 }}>
        <Button onPress={onOpen} mode="contained" style={{ flex: 1 }} >View</Button>
        <Button onPress={onDelete} mode="contained" style={{ flex: 1 }}>Delete</Button>
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
    marginVertical: 6
  },
  title: {
    fontSize: 26,

  },
  date: {
    fontSize: 12
  }
})