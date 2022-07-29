import { ItemType } from 'antd/es/menu/hooks/useItems';
import { CategoriesCardsType } from 'types';

export const menuItems: ItemType[] = [
  {
    key: '/characters',
    label: 'Characters',
  },
];

export const categoriesCards: CategoriesCardsType[] = [
  {
    title: 'Characters',
    description: 'The famous Star Wars characters',
    imgUrl: 'img/categories/character.jpg',
    url: '/characters',
  },
];
