import { TryCatchFunction } from '@/utils/trycatch.util';
import * as SecureStore from "expo-secure-store"

export const setSecure = async (key: string, password: string): Promise<boolean> => {
    return TryCatchFunction(async () => {
        await SecureStore.setItemAsync(key, password, {
            requireAuthentication: true
        })
        return true
    },
        () => { return false })
}

export const deleteSecure = async (key: string) => {
   return TryCatchFunction(async () => {
       return await SecureStore.deleteItemAsync(key);
    })
}



export const getSecure = async (key: string): Promise<string | null> => {
    return TryCatchFunction(async () => {
        return await SecureStore.getItemAsync(key);
    },
        () => { return null })
}