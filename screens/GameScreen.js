import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title.js";
import NumberContainer from "../components/game/NumberContainer.js";
import PrimaryButton from "../components/ui/PrimaryButton.js";
import Card from "../components/ui/Card.js";
import InstructionText from "../components/ui/InstructionText.js";
import GuessLogItem from "../components/game/GuessLogItem.js";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const nextGuessHandlerFunction = (tooHigh) => {
    if (
      (tooHigh && currentGuess < userNumber) ||
      (!tooHigh && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", `You know this is wrong...`, [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (tooHigh) {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevGuesses) => {
      return [newRandomNumber, ...prevGuesses];
    });
  };
  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View>
          <InstructionText style={styles.instructionText}>
            Higher or Lower
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPress={nextGuessHandlerFunction.bind(this, false)}
              >
                <Ionicons name="md-add" size={24} />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPress={nextGuessHandlerFunction.bind(this, true)}
              >
                <Ionicons name="md-remove" size={24} />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              ></GuessLogItem>
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({
  instructionText: {
    marginBottom: 24,
  },
  screen: {
    flex: 1,
    padding: 12,
    allignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
