import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <Header>
        <Left/>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}