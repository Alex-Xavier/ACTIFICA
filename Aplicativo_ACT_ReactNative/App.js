import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  //Text,
  //TextInput,
  //TouchableOpacity
} from 'react-native';
//import firebase from "react-native-firebase";

export default class App extends Component {
  /*state = {
    email: '',
    password: '',
    isAuthenticated: false
  };

  login = async () => {
    const { email, password } = this.state;

    try{
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({ isAuthenticated: true });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }*/
  
  render() {
    return (
      /*<View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.container.backgroundColor}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        { this.state.isAuthenticated ? <Text>Logado com sucesso!</Text> : null}
      </View>*/
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.container.backgroundColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 20
  },
  /*button: {
    height: 45,
    backgroundColor: "#7d253b",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold"
  },
  input: {
    height: 45,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    borderColor: "#e27071",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10
  }*/
});
