import { makeAutoObservable } from 'mobx';
import { Api } from 'services/Api';
import RootStore from 'stores/RootStore';
import { FilmsType, FilmType } from 'types';

class FilmsStore {
  films: FilmsType | undefined;
  film: FilmType | undefined;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchFilmsByPage(page: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/films/?page=${page}`);
    this.setFilms(data);

    this.rootStore.setLoading(false);
  }

  async fetchFilmsBySearch(search: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/films/?search=${search}`);
    this.setFilms(data);

    this.rootStore.setLoading(false);
  }

  async fetchFilmsBySearchAndPage(search: string | null, page: string | null) {
    this.rootStore.setLoading(true);

    const { data } = await Api.get(`/films/?search=${search}&page=${page}`);
    this.setFilms(data);

    this.rootStore.setLoading(false);
  }

  async fetchFilmById(id: string | undefined) {
    this.rootStore.setLoading(false);

    const { data } = await Api.get(`/films/${id}`);
    this.setCurrentFilm(data);

    this.rootStore.setLoading(false);
  }

  setFilms(films: FilmsType) {
    this.films = films;
  }

  getFilms() {
    return this.films;
  }

  setCurrentFilm(film: FilmType) {
    this.film = film;
  }

  getCurrentFilm() {
    return this.film;
  }
}

export default FilmsStore;
