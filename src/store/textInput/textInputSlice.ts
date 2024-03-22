import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InputTextState {
    airportsValue: string,
    countriesValue: string,
    metarBool: boolean,
    sigmetBool: boolean,
    tafBool: boolean,
}

const initialState: InputTextState = {
    airportsValue: "",
    countriesValue: "",
    metarBool: false,
    sigmetBool: false,
    tafBool: false,
}



const textInputSlice = createSlice({
    name: "textInput",
    initialState,
    reducers: {
        setAirportsValue: (state, action: PayloadAction<string>) => {
            state.airportsValue = action.payload;
        },
        setCountriesValue: (state, action: PayloadAction<string>) => {
            state.countriesValue = action.payload;
        },
        setMetarBool: (state, action: PayloadAction<boolean>) => {
            state.metarBool = action.payload;
        },
        setSigmetBool: (state, action: PayloadAction<boolean>) =>{
            state.sigmetBool = action.payload;
        },
        setTafBool: (state, action: PayloadAction<boolean>) => {
            state.tafBool = action.payload
        }
    },
});

export const { 
    setAirportsValue, 
    setCountriesValue, 
    setMetarBool,
    setSigmetBool,
    setTafBool,

} = textInputSlice.actions;


export default textInputSlice.reducer;