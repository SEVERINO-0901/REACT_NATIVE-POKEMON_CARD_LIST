/*
NOME DO PROJETO: PokemonCardList - PokemonCard                                                           
AUTOR: Leonardo Severino  
DATA: 10/09/2024 - 16:16:51
DESCRIÇÃO:
  Componente que representa a carta de um Pokemon com suas informações detalhadas de nome, figura, tipo, pontos de vida, golpes e fraquezas. 
*/

//Importa as bibliotecas
import { 
    View, 
    Text, 
    StyleSheet, 
    Platform, 
    Image 
} from "react-native"; 

const getTypeDetails = (type) => { //Função 'getTypeDetails', que exibe elementos gráficos específicos relativos ao tipo do Pokemon representado na carta 
    switch (type.toLowerCase()){
        case "electric": //Tipo 'Elétrico'
            return {borderColor: "#FFD700", emoji: "⚡"};
        case "water": //Tipo 'Água'
            return {borderColor: "#6493EA", emoji: "💧"};
        case "fire": //Tipo 'Fogo'
            return {borderColor: "#FF5733", emoji: "🔥"};
        case "grass": //Tipo 'Grama'
            return {borderColor: "#66CC66", emoji: "🌿"};
        default:
            return {borderColor: "A0A0A0", emoji: "❓"};
    }
};

export default function PokemonCard({ //Função default 'PokemonCard()'
    name, //Nome do Pokemon
    image, //Figura do Pokemon
    type, //Tipo do Pokemon
    hp, //Pontos de vida do Pokemon
    moves, //Golpes do Pokemon
    weaknesses //Fraquezas do Pokemon
}) {
    const {borderColor, emoji} = getTypeDetails(type);
    return(
        <View style = {styles.card}>
            {/**Nome e HP do Pokemon*/}
            <View style = {styles.nameContainer}>
                <Text style = {styles.name}>{name}</Text>
                <Text style = {styles.hp}>❤️{hp}</Text>
            </View>

            {/**Imagem do Pokemon*/}
            <Image 
                source = {image} 
                style = {styles.image} 
                accessibilityLabel = {`${name} pokemon`} 
                resizeMode = "contain"
            />
            

            {/**Tipo do Pokemon*/}
            <View style = {styles.typeContainer}>
                <View style = {[styles.badge, {borderColor}]}>
                    <Text style = {styles.typeEmoji}>{emoji}</Text>
                    <Text style = {styles.typeText}>{type}</Text>
                </View>
            </View>

            {/**Golpes do Pokemon*/}
            <View style = {styles.movesContainer}>
                <Text style = {styles.movesText}>Moves: {moves.join(", ")}</Text>
            </View>

            {/**Fraquezas do Pokemon*/}
            <View style = {styles.weaknessContainer}>
                <Text style = {styles.weaknessText}>Weakness: {weaknesses.join(", ")}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios:  {
                shadowOffset: {width: 2, height: 2},
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16
    },
    typeContainer: {
        alignItems: "center", 
        marginBottom: 40    
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    movesContainer: {
        marginBottom: 16
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    weaknessContainer: {
        marginBottom: 8
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold"
    }
});
