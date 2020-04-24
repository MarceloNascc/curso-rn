import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#d14038',
    }
  }
});

export default createAppContainer(navigator);