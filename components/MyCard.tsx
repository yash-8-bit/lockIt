import { myFont } from '@/style/font';
import { ItemsInterface } from '@/types/items.type';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {  Divider, Text } from 'react-native-paper';
import MyButton from './MyButton';


export default function MyCard({ data, onOpen, onDelete }: {
  data: ItemsInterface,
  onOpen: () => void;
  onDelete: () => void;
}) {
  return (
    <>
    <View style={[styles.container]}>
      <View>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 2 }}>
        <MyButton  onPress={onOpen} icon={"lock-open"} label='View' />
        <MyButton  onPress={onDelete} icon={"delete"} label='Delete' />
      </View>
    </View>
    <Divider bold />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginVertical: 6
  },
  title: {
    fontSize: 22,
   ...myFont,
   marginBottom : 2
  }
})