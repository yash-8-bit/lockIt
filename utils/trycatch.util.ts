export  const TryCatchFunction = async(callback: Function,
    onerror?: Function
) => {
    try {
        const result = await callback();
        return result;
    }
    catch (err) {
       return onerror?.();
    }
}