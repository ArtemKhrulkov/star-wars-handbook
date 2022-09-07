import { makeAutoObservable } from 'mobx';
import { Api } from 'services/Api';
import RootStore from 'stores/RootStore';
import { CharactersType, CharacterType } from 'types';

class VehiclesStore {
  vehicles: CharactersType | undefined;
  vehicle: CharacterType | undefined;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchVehiclesByPage(page: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/vehicles/?page=${page}`);
    this.setVehicles(data);

    this.rootStore.setLoading(false);
  }

  async fetchVehiclesBySearch(search: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/vehicles/?search=${search}`);
    this.setVehicles(data);

    this.rootStore.setLoading(false);
  }

  async fetchVehiclesBySearchAndPage(
    search: string | null,
    page: string | null
  ) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/vehicles/?search=${search}&page=${page}`);
    this.setVehicles(data);

    this.rootStore.setLoading(false);
  }

  async fetchVehicleById(id: string | undefined) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/vehicles/${id}`);
    this.setCurrentVehicle(data);

    this.rootStore.setLoading(false);
  }

  setVehicles(vehicles: CharactersType) {
    this.vehicles = vehicles;
  }

  getVehicles() {
    return this.vehicles;
  }

  setCurrentVehicle(vehicle: CharacterType) {
    this.vehicle = vehicle;
  }

  getCurrentVehicle() {
    return this.vehicle;
  }
}

export default VehiclesStore;
