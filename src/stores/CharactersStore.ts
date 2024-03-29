import { makeAutoObservable } from 'mobx';
import { Api } from 'services/Api';
import RootStore from 'stores/RootStore';
import { CharactersType, CharacterType } from 'types';

class CharactersStore {
  characters: CharactersType | undefined;
  character: CharacterType | undefined;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchCharactersByPage(page: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/people/?page=${page}`);
    this.setCharacters(data);

    this.rootStore.setLoading(false);
  }

  async fetchCharactersBySearch(search: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/people/?search=${search}`);
    this.setCharacters(data);

    this.rootStore.setLoading(false);
  }

  async fetchCharactersBySearchAndPage(
    search: string | null,
    page: string | null
  ) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/people/?search=${search}&page=${page}`);
    this.setCharacters(data);

    this.rootStore.setLoading(false);
  }

  async fetchCharacterById(id: string | undefined) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/people/${id}`);
    this.setCurrentCharacter(data);

    this.rootStore.setLoading(false);
  }

  setCharacters(characters: CharactersType) {
    this.characters = characters;
  }

  getCharacters() {
    return this.characters;
  }

  setCurrentCharacter(character: CharacterType) {
    this.character = character;
  }

  getCurrentCharacter() {
    return this.character;
  }
}

export default CharactersStore;
