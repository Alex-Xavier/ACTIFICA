import React from 'react';
import Image from 'react-navigation';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/header/header.png')}
      />
    );
  }
}