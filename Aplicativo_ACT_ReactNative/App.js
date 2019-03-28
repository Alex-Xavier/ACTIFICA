import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.box.borderColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20
  }
});
