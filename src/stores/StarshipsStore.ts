import { makeAutoObservable } from 'mobx';
import { Api } from 'services/Api';
import RootStore from 'stores/RootStore';
import { CharactersType, CharacterType } from 'types';

class StarshipsStore {
  starships: CharactersType | undefined;
  starship: CharacterType | undefined;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchStarshipsByPage(page: string | null) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/starships/?page=${page}`);
    this.setStarships(data);

    this.rootStore.isLoading = false;
  }

  async fetchStarshipsBySearch(search: string | null) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/starships/?search=${search}`);
    this.setStarships(data);

    this.rootStore.isLoading = false;
  }

  async fetchStarshipsBySearchAndPage(
    search: string | null,
    page: string | null
  ) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/starships/?search=${search}&page=${page}`);
    this.setStarships(data);

    this.rootStore.isLoading = false;
  }

  async fetchStarshipById(id: string | undefined) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/starships/${id}`);
    this.setCurrentStarship(data);

    this.rootStore.isLoading = false;
  }

  setStarships(starships: CharactersType) {
    this.starships = starships;
  }

  getStarships() {
    return this.starships;
  }

  setCurrentStarship(starship: CharacterType) {
    this.starship = starship;
  }

  getCurrentStarship() {
    return this.starship;
  }
}

export default StarshipsStore;
