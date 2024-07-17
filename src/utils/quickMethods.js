export const sliceStr = (str, hl) => {
    let slicedStr = ""
    if (str.length > hl) {
        for (let i = 0; i < hl; i++) {
            slicedStr += str[i]
        }
    } else {
        return str
    }
    return slicedStr + "...";
}