import React from 'react';
import { StatusBar, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#7d253b"
        />
        <TouchableOpacity>
          <Image style={styles.cards} source={require('../images/EuQuero.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.cards} source={require('../images/NaoQuero.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.cards} source={require('../images/EuEstou.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.cards} source={require('../images/NaoEstou.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.cards} source={require('../images/Escolher.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.cards} source={require('../images/Acoes.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    padding: 20
  },
  cards: {
    aspectRatio: 1,
    height: 135,
    width: 135,
    backgroundColor: "#FFF",
    borderColor: "#7d253b",
    borderWidth: 0.5,
    margin: 10
  }
});