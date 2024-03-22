export function textChanged(text: string) {
    if(text === "TAF_LONGTAF") {
        return "TAF";
    } else {
        return text;
    }
}