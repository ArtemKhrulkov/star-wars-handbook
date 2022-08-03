import CharactersStore from 'stores/CharactersStore';
import { Api } from '../services/Api';

class RootStore {
  isLoading: boolean;
  charactersStore: CharactersStore;

  constructor() {
    this.isLoading = false;
    this.charactersStore = new CharactersStore(this);
  }

  async fetchResultsByUrl(url: string) {
    const { data } = await Api.get(url);
    return data;
  }
}

export default RootStore;
