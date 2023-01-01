import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors.js";
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        //styles.pressed is voor iOS, omdat android_ripple niet werkt, maar verslecht ux op Android
        style={({ pressed }) => {
          return pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer;
        }}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
