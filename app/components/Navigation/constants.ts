import { ROUTES } from '@/app/utils/constants';

export enum NavLink {
  Home = 'Home',
  Movies = 'Movies',
  Shows = 'TV shows',
}

export const NAV_LINKS = Object.freeze([
  {
    id: 1,
    text: NavLink.Home,
    href: ROUTES.HOME,
  },
  { id: 2, text: NavLink.Movies, href: ROUTES.MOVIES },
  {
    id: 3,
    text: NavLink.Shows,
    href: ROUTES.SHOWS,
  },
]);
