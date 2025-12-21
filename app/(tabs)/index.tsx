import { MyItemForm } from "@/components/form/MyItemForm";
import MyCard from "@/components/MyCard";
import MyModal from "@/components/MyModal";
import { getSecure } from "@/main/secure-store";
import { deleteItem, getAllItems } from "@/main/storage";
import { ItemsInterface } from "@/types/items.type";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';
import { myFont } from "@/style/font";

export default function Index() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<ItemsInterface[]>([]);
  const [openItem, setOpenitem] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    (async () => {
      const items = await getAllItems();
      setData(items);
    })()
  }, [isOpen]);
  const closefunction = () => setIsOpen(false);
  const onOpen = async (item: ItemsInterface) => {
    const res = await getSecure(item.securekey);
    if (res) {
      setOpenitem(item.securekey);
      setPassword(res);
    }
  }
  const onDelete = async (id: number) => {
    const res = await deleteItem(id);
    alert(res.message);
    if (res.success)
      setData(data.filter(item => item.id !== id))
  }
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <MyModal
        isOpen={isOpen}
        onClose={closefunction}
      >
        <MyItemForm onClose={() => { closefunction(); }} />
      </MyModal>
      <MyModal
        isOpen={openItem !== ""}
        onClose={() => setOpenitem("")}
      >
        <View style={{ margin: 12, padding: 12, backgroundColor: theme.colors.background }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ ...myFont, fontSize: 25, textDecorationLine: "underline" }}>Password</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ ...myFont }}>{password}</Text>
              <IconButton
                icon="content-copy"
                size={16}
                onPress={async () => {
                  await Clipboard.setStringAsync(password);
                  alert("Password Copied Success"),
                    setOpenitem("")
                }}
              />
            </View>
          </View>
        </View>
      </MyModal>
      <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <Text style={{ ...myFont, opacity: 0.7 }} variant="headlineSmall" >All Saved Password</Text>
        <IconButton
          icon="plus"
          mode="contained"
          size={20}
          onPress={() => setIsOpen(true)}
        />
      </View>
      {data.length == 0 ?
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ ...myFont, textAlign: "center" }}>Empty Storage</Text>
        </View>
        : <FlatList
          data={data}
          renderItem={(({ item }) => <MyCard onDelete={() => onDelete(item.id)} onOpen={() => onOpen(item)} data={item} />)}
        />}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  "container": {
    flex: 1,
    padding: 12,
    ...myFont
  }
})