
import { setItemforKey } from "@/main/storage";
import { myFont } from "@/style/font";
import { generatekey } from "@/utils/generatekey.util";
import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";


interface FormInterface {
  title: string;
  password: string;
}

export const MyItemForm = ({ onClose }: { onClose: () => void }) => {
  const intial = {
    title: "", password: ""
  }
  const theme = useTheme();
  const [form, setform] = useState<FormInterface>(intial)
  const [hidepass, setHidePass] = useState<boolean>(true);
  const handleSubmit = async () => {
    if (!form.title || !form.password) alert("All input is required");
    const newkey = generatekey(form.title);
    const res = await setItemforKey(form.title.trim(), newkey, form.password);
    if (res.success) onClose();
    else alert(res.message);

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
          contentStyle={{ ...myFont }}

          value={form.title}
          onChangeText={text => setform({ ...form, title: text })}
        />
        <TextInput
          label="Enter Password"
          mode="outlined"
          value={form.password}
          contentStyle={{ ...myFont }}
          secureTextEntry={hidepass}
          right={<TextInput.Icon onPress={() => setHidePass(!hidepass)} icon={hidepass ? "eye" : "eye-off"} />}
          onChangeText={text => setform({ ...form, password: text })}
        />
      </View>
      <Button labelStyle={{ ...myFont }} onPress={handleSubmit} mode="contained">Save</Button>
    </View>
  )
}
