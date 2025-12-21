import { TryCatchFunction } from '@/utils/trycatch.util';
import * as SecureStore from "expo-secure-store"


export const getSecure = async (key: string): Promise<string | null> => {
    return TryCatchFunction(async () => {
        return await SecureStore.getItemAsync(key);
    },
        () => { return null })
}