import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import axios from 'axios';



interface VehicleMakeState{
    vehicles:any[],
}

const initialState:VehicleMakeState = {
    vehicles:[]
}

export const VehicleMakeSlice = createSlice({
    name:'vehicle',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getModelsAndMake.fulfilled,(state, action:PayloadAction<any>)=>{
            state.vehicles = action.payload
        })
    }
})

export const getModelsAndMake = createAsyncThunk(
    "vehicle/getVehicleModels",
    async()=>{
        const {data} = await axios.get("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine=model%3A%22Truck%202WD%22")
       return data.results
    }
        
)

export default VehicleMakeSlice.reducer
