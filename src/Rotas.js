import React from 'react';
import { Router, Scene, Stack } from "react-native-router-flux";

import Sobre from "./components/Sobre";
import Principal from "./components/Principal";
import OutrosJogos from "./components/OutrosJogos";
import Resultado from "./components/Resultado";
const Rotas = () => (
    <Router>
        <Stack key="root" titleStyle={{ alignItems: "center" }} sceneStyle={{ paddingTop: 50, }}>
            <Scene key="principal" title="Home" component={Principal} />
            <Scene key="sobre" title="Sobre" component={Sobre} />
            <Scene key="outrosjogos" title="Outros Jogos" component={OutrosJogos} />
            <Scene key="resultado" title="Resultado" component={Resultado} />
        </Stack>
    </Router>
);

export default Rotas;