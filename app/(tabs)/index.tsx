import MyCard from "@/components/MyCard";
import MyModal from "@/components/MyModal";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from 'react-native-safe-area-context';


interface FormInterface {
  key: string;
  password: string;
}

const MyForm = () => {
  const intial = {
    key: "", password: ""
  }
  const theme = useTheme();
  const [form, setform] = useState<FormInterface>(intial)
  const [hidepass, setHidePass] = useState<boolean>(true);
  const handleSubmit = () => {
    if (!form.key || !form.password) alert("All input is required")
  }
  return (
    <View style={{
      gap: 20, backgroundColor: theme.colors.background,
      margin: 20, padding: 12, borderRadius: 12
    }}>
      <View style={{ gap: 3 }}>
        <TextInput
          label="Enter Title"
          mode="outlined"
          value={form.key}
          onChangeText={text => setform({ ...form, key: text })}
        />
        <TextInput
          label="Enter Password"
          mode="outlined"
          value={form.password}
          secureTextEntry={hidepass}
          right={<TextInput.Icon onPress={() => setHidePass(!hidepass)} icon={hidepass ? "eye" : "eye-off"} />}
          onChangeText={text => setform({ ...form, password: text })}
        />
      </View>
      <Button onPress={handleSubmit} mode="contained">Save</Button>
    </View>
  )
}

export default function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <MyModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <MyForm />
      </MyModal>
      <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <Text variant="headlineMedium" >All Saved Password</Text>
        <IconButton
          icon="plus"
          mode="contained"
          size={20}
          onPress={() => setIsOpen(true)}
        />
      </View>
      <MyCard title="Password" date="12 june, 2012" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  "container": {
    flex: 1,
    padding: 12
  }
})