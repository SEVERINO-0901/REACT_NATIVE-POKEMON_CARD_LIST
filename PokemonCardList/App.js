/*
NOME DO PROJETO: PokemonCardList - App                                                            
AUTOR: Leonardo Severino  
DATA: 10/09/2024 - 16:16:51
DESCRIÇÃO:
  Um programa em React native que exibe uma lista de cartas de Pokemon com suas informações detalhadas. 
*/

//Inclusão das bibliotecas
import { 
  StyleSheet, 
  SafeAreaView, 
  Platform, 
  ScrollView 
} from "react-native";

import PokemonCard from "./components/PokemonCard"; //Importa o component 'PokemonCard'

export default function App(){ //Função default 'App()'
  
  const charmanderData = { //Dados do Pokemon 'Charmander'
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const bulbasaurData = { //Dados do Pokemon 'Bulbassauro'
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const squirtleData = { //Dados do Pokemon 'Squirtle'
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const pikachuData = { //Dados do Pokemon 'Pikachu'
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses:["Ground"],
  };

  return (
    //Área de exibição
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        {/*Exibe a lista de cartas*/}
        <PokemonCard {...charmanderData}/>
        <PokemonCard {...squirtleData}/>
        <PokemonCard {...bulbasaurData}/>
        <PokemonCard {...pikachuData}/>  
      </ScrollView>
    </SafeAreaView>
  );
}

//Definição da StyleSheet 'styles'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
});
