import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import axios from 'axios';

// Define Vehicle data schema
export interface IVehicleData {
    regNumber: string;
    vehicleModel: string;
    type: string;
    status: boolean;
    iotDevice:string
}

interface VehicleState{
    vehicles:IVehicleData[]
}

const initialState:VehicleState = {
    vehicles:[]
}

export const VehicleSlice = createSlice({
    name:'vehicle',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(addVehicleAsync.fulfilled, (state, action:PayloadAction<any>)=>{
            state.vehicles.push({
                regNumber:action.payload.regNumber,
                vehicleModel:action.payload.vehicleModel,
                type:action.payload.type,
                status:action.payload.status,
                iotDevice:action.payload.iotDevice
            })
        })
    }
})

export const addVehicleAsync = createAsyncThunk(
    "vehicle/addVehicle",
    async(payload)=>{
        const newVehicle = await axios.post("http://localhost:3000/api/vehicles", payload)
        return newVehicle;
    }
)


export default VehicleSlice.reducer
