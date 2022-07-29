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

  async fetchCharacters() {
    this.rootStore.isLoading = true;

    const { data } = await Api.get('/people');
    this.setCharacters(data);

    this.rootStore.isLoading = false;
  }

  async fetchCharactersByPage(page: string | null) {
    const { data } = await Api.get(`/people/?page=${page}`);
    this.setCharacters(data);
  }

  async fetchCharacterById(id: number) {
    this.rootStore.isLoading = true;

    const { data } = await Api.get(`/people/${id}`);
    this.setCharacters(data);

    this.rootStore.isLoading = false;
  }

  setCharacters(characters: CharactersType) {
    this.characters = characters;
  }

  getCharacters() {
    return this.characters;
  }

  setCharacter(character: CharacterType) {
    this.character = character;
  }

  getCharacter() {
    return this.character;
  }
}

export default CharactersStore;
