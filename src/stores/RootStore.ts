import CharactersStore from 'stores/CharactersStore';
import { Api } from '../services/Api';

class RootStore {
  isLoading: boolean;
  charactersStore;

  constructor() {
    this.isLoading = false;
    this.charactersStore = new CharactersStore(this);
  }

  async fetchResultsCountByUrl(url: string) {
    const { data } = await Api.get(url);
    return data.count;
  }
}

export default RootStore;
