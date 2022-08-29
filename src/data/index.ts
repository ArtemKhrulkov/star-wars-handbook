import { ItemType } from 'antd/es/menu/hooks/useItems';
import { CategoriesCardsType } from 'types';

export const menuItems: ItemType[] = [
  {
    key: '/characters',
    label: 'Characters',
  },
  {
    key: '/films',
    label: 'Films',
  },
  {
    key: '/planets',
    label: 'Planets',
  },
  {
    key: '/starships',
    label: 'Starships',
  },
  {
    key: '/vehicles',
    label: 'Vehicles',
  },
  {
    key: '/species',
    label: 'Species',
  },
];

export const categoriesCards: CategoriesCardsType[] = [
  {
    title: 'Characters',
    description: 'The famous Star Wars characters',
    imgUrl: 'img/categories/character.jpg',
    url: '/characters',
  },
  {
    title: 'Films',
    description: 'A long time ago in a galaxy far, far away....',
    imgUrl: 'img/categories/films.jpg',
    url: '/films',
  },
  {
    title: 'Planets',
    description: 'The biggest and the smallest',
    imgUrl: 'img/categories/planets.jpg',
    url: '/planets',
  },
  {
    title: 'Starships',
    description: 'All kinds of starships in universe',
    imgUrl: 'img/categories/starships.jpg',
    url: '/planets',
  },
  {
    title: 'Vehicles',
    description: 'You would like to ride on these ones',
    imgUrl: 'img/categories/vehicles.jpg',
    url: '/vehicles',
  },
  {
    title: 'Species',
    description: 'WOOKIE!',
    imgUrl: 'img/categories/species.jpg',
    url: '/species',
  },
];
