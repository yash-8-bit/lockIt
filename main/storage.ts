import { ItemsInterface } from '@/types/items.type';
import { TryCatchFunction } from '@/utils/trycatch.util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteSecure, setSecure } from './secure-store';

export const getAllItems = (): Promise<ItemsInterface[]> => {
    return TryCatchFunction(async () => {
        const values = await AsyncStorage.getItem("storage") || "[]";
        return JSON.parse(values);

    })
}


export const setItemforKey = (title: string, securekey: string, password: string): Promise<{
    success: boolean,
    message: string
}> => {
    return TryCatchFunction(async () => {
        const values: ItemsInterface[] = JSON.parse(await AsyncStorage.getItem("storage") || "[]");
        if (!values.length)
            values.push({ id: 1, title, securekey })
        else {
            if (values.find((item) => item.title.trim().toLowerCase() === title.trim().toLowerCase()))
                return { success: false, message: "title already exist" }
            values.push({ id: values.length + 1, title, securekey })
        }
        const res = await setSecure(securekey, password);
        console.log(res)
        if (!res) return ({ success: false, message: "Try Again..." })
        await AsyncStorage.setItem("storage", JSON.stringify(values));
        return { success: true, message: "Added Successfully" }
    },
        () => { return ({ success: false, message: "Try Again..." }) })
}



export const deleteItem = (id: number):  Promise<{
    success: boolean,
    message: string
}> => {
    return TryCatchFunction(async () => {
        const values: ItemsInterface[] = JSON.parse(await AsyncStorage.getItem("storage") || "[]");
        const data = values.find((item) => item.id === id)
        if (!data) return { success: false, message: "Not Found" };
        const res = await deleteSecure(data?.securekey);
        console.log(res);
        const newvalues = values.filter(item => item.title !== data.title)
        await AsyncStorage.setItem("storage", JSON.stringify(newvalues));
        return { success: true, message: "Removed Successfully" }
    },
        () => { return ({ success: false, message: "Try Again..." }) })
}