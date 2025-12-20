export function generatekey(key: string): string {
    return key.trim().replaceAll(" ","&").toLowerCase();
}