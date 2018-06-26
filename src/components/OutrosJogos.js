import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class OutrosJogos extends Component {
                 render() {
                   return <View style={styles.container}>
                       <Text style={styles.welcome}>
                         Outros Jogos
                       </Text>
                     </View>;
                 }
               }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#61BD8C"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
