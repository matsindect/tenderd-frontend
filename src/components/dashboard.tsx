import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getModelsAndMake } from "../store/features/vehicleMakes";

const Dashboard = () => {
    const vehicleMakes = useAppSelector(state => state.vihicleMake.vehicles)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getModelsAndMake()); // Dispatch the action to get all makes when the component mounts
      }, [dispatch]);
  // Mock data for dropdowns
  console.log(vehicleMakes)
  const vehicleModels = ["Model 1", "Model 2", "Model 3"];
  const types = ["Type 1", "Type 2", "Type 3"];
  const statuses = ["Active", "Inactive", "Maintenance"];
  const iotDevices = ["Device 1", "Device 2", "Device 3"];
  return (
    <div className="max-w-lg mx-auto bg-white p-8 pt-10 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Vehicle Details</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="regNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Registration Number
          </label>
          <input
            type="text"
            id="regNumber"
            name="regNumber"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="vehicleModel"
            className="block text-gray-700 font-bold mb-2"
          >
            Vehicle Model
          </label>
          <select
            id="vehicleModel"
            name="vehicleModel"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            {vehicleMakes.map((model, index) => (
              <option key={index}>{model.make}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Type
          </label>
          <select
            id="type"
            name="type"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            {types.map((type, index) => (
              <option key={index}>{type}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 font-bold mb-2"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            {statuses.map((status, index) => (
              <option key={index}>{status}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="iotDevice"
            className="block text-gray-700 font-bold mb-2"
          >
            IoT Device
          </label>
          <select
            id="iotDevice"
            name="iotDevice"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            {iotDevices.map((device, index) => (
              <option key={index}>{device}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
