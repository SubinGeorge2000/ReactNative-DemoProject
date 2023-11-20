import Search from '../screen/Search';
import Explore from '../screen/Explore';
import History from '../screen/History';
import Profile from '../screen/Profile';
import HomeStack from '../router/HomeStack';

export const tabScreens = [
  {
    name: 'Home',
    component: HomeStack,
    icon: 'home',
  },
  {
    name: 'Search',
    component: Search,
    icon: 'search',
  },
  {
    name: 'Explore',
    component: Explore,
    icon: 'explore',
  },
  {
    name: 'History',
    component: History,
    icon: 'history',
  },
  {
    name: 'Profile',
    component: Profile,
    icon: 'account-circle',
  },
];
