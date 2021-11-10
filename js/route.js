import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  if (routeName.includes('Home')) return 'Home';
  else if (routeName.includes('About')) return 'About';
  else return routeName;
}

export default getHeaderTitle;
