import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Home() {

    const navigation = useNavigation();

    function paginaDetalhes() {
        navigation.navigate('detalhes');
    }

    return(
        <View>
            <Text>ESTA É A TELA HOME</Text>
            <Button title = 'Ir para detalhes' onPress = {paginaDetalhes} />
        </View>
    );
}