import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Sobre extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sobre
        </Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#61BD8C"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
