import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380 || height < 440) {
    imageSize = 150;
  }
  if (height < 440) {
    imageSize = 120;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game is over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/GameOverImageGuessingGame.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.TextHighlight}>{roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.TextHighlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onRestart}> Start New Game </PrimaryButton>
      </View>
    </ScrollView>
  );
};
export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 32,
  },
  image: { width: "100%", height: "100%" },
  summaryText: {
    fornFamily: "open-sans",
    color: Colors.primary500,
    fontSize: 24,
    marginBottom: 12,
    textAlign: "center",
  },
  TextHighlight: {
    fornFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
