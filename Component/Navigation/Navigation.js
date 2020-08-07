import {createStackNavigator , createAppContainer} from 'react-navigation_stack'
import Search from './Component/Search.js'
export default createAppContainer(SearchStackNavigator)
const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    }
})