import { makeAutoObservable } from 'mobx';
import { Api } from 'services/Api';
import RootStore from 'stores/RootStore';
import { CharactersType, CharacterType } from 'types';

class SpeciesStore {
  species: CharactersType | undefined;
  specie: CharacterType | undefined;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchSpeciesByPage(page: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/species/?page=${page}`);
    this.setSpecies(data);

    this.rootStore.setLoading(false);
  }

  async fetchSpeciesBySearch(search: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/species/?search=${search}`);
    this.setSpecies(data);

    this.rootStore.setLoading(false);
  }

  async fetchSpeciesBySearchAndPage(
    search: string | null,
    page: string | null
  ) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/species/?search=${search}&page=${page}`);
    this.setSpecies(data);

    this.rootStore.setLoading(false);
  }

  async fetchSpecieById(id: string | undefined) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/species/${id}`);
    this.setCurrentSpecie(data);

    this.rootStore.setLoading(false);
  }

  setSpecies(species: CharactersType) {
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }

  setCurrentSpecie(specie: CharacterType) {
    this.specie = specie;
  }

  getCurrentSpecie() {
    return this.specie;
  }
}

export default SpeciesStore;
