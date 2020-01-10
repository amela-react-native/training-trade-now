import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './src/redux/reducers/counterReducer';
import ButtomNavigation from './src/navigation/ButtomNavigation';

const store = createStore(counterReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ButtomNavigation />
        </View>
      </Provider>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
