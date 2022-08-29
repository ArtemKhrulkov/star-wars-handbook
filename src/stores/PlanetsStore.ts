import { makeAutoObservable } from 'mobx';
import { Api } from 'services/Api';
import RootStore from 'stores/RootStore';
import { CharactersType, CharacterType } from 'types';

class PlanetsStore {
  planets: CharactersType | undefined;
  planet: CharacterType | undefined;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchPlanetsByPage(page: string | null) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/planets/?page=${page}`);
    this.setPlanets(data);

    this.rootStore.isLoading = false;
  }

  async fetchPlanetsBySearch(search: string | null) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/planets/?search=${search}`);
    this.setPlanets(data);

    this.rootStore.isLoading = false;
  }

  async fetchPlanetsBySearchAndPage(
    search: string | null,
    page: string | null
  ) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/planets/?search=${search}&page=${page}`);
    this.setPlanets(data);

    this.rootStore.isLoading = false;
  }

  async fetchPlanetById(id: string | undefined) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/planets/${id}`);
    this.setCurrentPlanet(data);

    this.rootStore.isLoading = false;
  }

  setPlanets(planets: CharactersType) {
    this.planets = planets;
  }

  getPlanets() {
    return this.planets;
  }

  setCurrentPlanet(planet: CharacterType) {
    this.planet = planet;
  }

  getCurrentPlanet() {
    return this.planet;
  }
}

export default PlanetsStore;
