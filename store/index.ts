import { DriverStore, LocationStore, MarkerData } from "@/types/type";
import { create } from "zustand";

export type UserLocation = {
  latitude: number;
  longitude: number;
  address: string;
};

export const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLongitude: null,
  userLatitude: null,
  destinationLongitude: -122.4324,
  destinationLatitude: 37.78825,
  destinationAddress: "Powel St, CA",
  setUserLocation: ({ latitude, longitude, address }: UserLocation) => {
    set(() => ({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));
  },
  setDestinationLocation: ({ latitude, longitude, address }: UserLocation) => {
    set(() => ({
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationAddress: address,
    }));
  },
}));

export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [] as MarkerData[],
  selectedDriver: null,
  setSelectedDriver: (driverId: number) =>
    set(() => ({ selectedDriver: driverId })),
  setDrivers: (drivers: MarkerData[]) => set(() => ({ drivers: drivers })),
  clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));
