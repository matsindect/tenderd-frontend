import { configureStore } from "@reduxjs/toolkit";
import VehicleSliceReducer from "./features/vehicleSlice";
import VehicleMakeReduser from "./features/vehicleMakes";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        vehicle: VehicleSliceReducer,
        vihicleMake:VehicleMakeReduser
    }
})

export const useAppDispatch:()=> typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
