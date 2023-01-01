import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors.js";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 8,
    width: 300,
    maxWidth: "80%",
    minWidth: "80%",
  },
});
