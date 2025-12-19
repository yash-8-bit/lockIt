export const TryCatchFunction = (callback: Function,
    onerror?: Function
) => {
    try {
        callback();
    }
    catch (err) {
        onerror?.();
    }
}