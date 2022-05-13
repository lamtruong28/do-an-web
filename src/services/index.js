
export const checkSymbol = (e) => {
    if ((e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122) ||
        (e.keyCode >= 48 && e.keyCode <= 57))
        return e.key;
}

export const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
});