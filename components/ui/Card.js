import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors.js";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
export default Card;

const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").heigth;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 12,
    //shadowAndroid
    elevation: 8,
    //shadowIOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    justifyContent: "center",
  },
});
