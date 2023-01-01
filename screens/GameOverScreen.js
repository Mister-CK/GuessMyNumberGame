import { View, Image, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/GameOverImageGuessingGame.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.TextHighlight}>{roundsNumber}</Text> rounds to guess
        the number
        <Text style={styles.TextHighlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}> Start New Game </PrimaryButton>
    </View>
  );
};
export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: { width: "100%", height: "100%" },
  summaryText: {
    fornFamily: "open-sans",
    color: Colors.primary500,
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  TextHighlight: {
    fornFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
