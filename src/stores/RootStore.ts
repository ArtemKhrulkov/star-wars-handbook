import CharactersStore from 'stores/CharactersStore';
import FilmsStore from './FilmsStore';
import PlanetsStore from './PlanetsStore';
import StarshipsStore from './StarshipsStore';
import VehiclesStore from './VehiclesStore';
import SpeciesStore from './SpeciesStore';

class RootStore {
  isLoading: boolean;
  charactersStore: CharactersStore;
  filmsStore: FilmsStore;
  planetsStore: PlanetsStore;
  starshipsStore: StarshipsStore;
  vehiclesStore: VehiclesStore;
  speciesStore: SpeciesStore;

  constructor() {
    this.isLoading = false;
    this.charactersStore = new CharactersStore(this);
    this.filmsStore = new FilmsStore(this);
    this.planetsStore = new PlanetsStore(this);
    this.starshipsStore = new StarshipsStore(this);
    this.vehiclesStore = new VehiclesStore(this);
    this.speciesStore = new SpeciesStore(this);
  }

  setLoading = (value: boolean) => {
    this.isLoading = value;
  };

  getCurrentEntity = (name: string) => {
    switch (name) {
      case 'characters':
        return this.charactersStore.getCurrentCharacter();
      case 'films':
        return this.filmsStore.getCurrentFilm();
      case 'planets':
        return this.planetsStore.getCurrentPlanet();
      case 'starships':
        return this.starshipsStore.getCurrentStarship();
      case 'vehicles':
        return this.vehiclesStore.getCurrentVehicle();
      case 'species':
        return this.speciesStore.getCurrentSpecie();
    }
  };

  getEntities = (name: string) => {
    switch (name) {
      case 'characters':
        return this.charactersStore.getCharacters();
      case 'films':
        return this.filmsStore.getFilms();
      case 'planets':
        return this.planetsStore.getPlanets();
      case 'starships':
        return this.starshipsStore.getStarships();
      case 'vehicles':
        return this.vehiclesStore.getVehicles();
      case 'species':
        return this.speciesStore.getSpecies();
    }
  };

  fetchEntitiesByPage = (name: string, page: string | null) => {
    switch (name) {
      case 'characters':
        return this.charactersStore.fetchCharactersByPage(page);
      case 'films':
        return this.filmsStore.fetchFilmsByPage(page);
      case 'planets':
        return this.planetsStore.fetchPlanetsByPage(page);
      case 'starships':
        return this.starshipsStore.fetchStarshipsByPage(page);
      case 'vehicles':
        return this.vehiclesStore.fetchVehiclesByPage(page);
      case 'species':
        return this.speciesStore.fetchSpeciesByPage(page);
    }
  };

  fetchEntityById = (name: string, id: string | undefined) => {
    switch (name) {
      case 'characters':
        return this.charactersStore.fetchCharacterById(id);
      case 'films':
        return this.filmsStore.fetchFilmById(id);
      case 'planets':
        return this.planetsStore.fetchPlanetById(id);
      case 'starships':
        return this.starshipsStore.fetchStarshipById(id);
      case 'vehicles':
        return this.vehiclesStore.fetchVehicleById(id);
      case 'species':
        return this.speciesStore.fetchSpecieById(id);
    }
  };

  fetchEntitiesBySearch = (name: string, search: string | null) => {
    switch (name) {
      case 'characters':
        return this.charactersStore.fetchCharactersBySearch(search);
      case 'films':
        return this.filmsStore.fetchFilmsBySearch(search);
      case 'planets':
        return this.planetsStore.fetchPlanetsBySearch(search);
      case 'starships':
        return this.starshipsStore.fetchStarshipsBySearch(search);
      case 'vehicles':
        return this.vehiclesStore.fetchVehiclesBySearch(search);
      case 'species':
        return this.speciesStore.fetchSpeciesBySearch(search);
    }
  };

  fetchEntitiesBySearchAndPage = (
    name: string,
    search: string | null,
    page: string | null
  ) => {
    switch (name) {
      case 'characters':
        return this.charactersStore.fetchCharactersBySearchAndPage(
          search,
          page
        );
      case 'films':
        return this.filmsStore.fetchFilmsBySearchAndPage(search, page);
      case 'planets':
        return this.planetsStore.fetchPlanetsBySearchAndPage(search, page);
      case 'starships':
        return this.starshipsStore.fetchStarshipsBySearchAndPage(search, page);
      case 'vehicles':
        return this.vehiclesStore.fetchVehiclesBySearchAndPage(search, page);
      case 'species':
        return this.speciesStore.fetchSpeciesBySearchAndPage(search, page);
    }
  };
}

export default RootStore;
