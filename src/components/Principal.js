import React, { Component } from 'react';
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
const logo = require('../img/logo.png');
const btnJogar = require("../img/botao_jogar.png");
const sobreJogo = require("../img/sobre_jogo.png");
const outrosJogos = require("../img/outros_jogos.png");

export default class Principal extends Component{
  render() {
    return <View style={styles.container}>
              <View style={styles.containerTop}>                
                    <Image style={styles.containerLogo} source={logo} />               
                <TouchableHighlight
                onPress={()=>{ Actions.resultado(); }}
                >
                  <Image source={btnJogar} />
                </TouchableHighlight>
              </View>

              <View style={styles.containerFooter}>
                <TouchableHighlight
                onPress={()=>{ Actions.sobre(); }}
                >
                    <Image source={sobreJogo} />
                </TouchableHighlight>

                <TouchableHighlight
          onPress={() => { Actions.outrosjogos(); }}
                >
                    <Image source={outrosJogos} />
                </TouchableHighlight>
               </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61BD8C"
  },
  containerTop: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  containerFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginBottom: 10,
  },
  containerLogo: {
    padding: 20,
    margin: 20,
  }
});
