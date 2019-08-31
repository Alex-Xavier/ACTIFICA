import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
import { StyleSheet } from 'react-native';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <Header androidStatusBarColor='#850002' style={styles.header}>
        <Left/>
        <Body>
          <Title style={styles.title}>Sobre o Aplicativo</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#b80003'
  },
  title: {
    fontWeight: 'bold'
  }
})