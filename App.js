import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import PhoneNumber from "./PhoneNumber";
import History from "./History";
import { useState, createContext } from "react";

export const AppContext = createContext();

export default function App() {
  const [showHistory, setShowHistory] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(false);
  const [phoneList, setPhoneList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#202124" : "#f0f0f0",
  };
  const textStyle = {
    color: isDarkMode ? "#f0f0f0" : "#202124",
  };
  const buttonBackgroundStyle = {
    backgroundColor: isDarkMode ? "#f0f0f0" : "#202124",
  };
  const buttonTextStyle = {
    color: isDarkMode ? "#202124" : "#f0f0f0",
  };
  const borderColorStyle = {
    borderColor: isDarkMode ? "#f0f0f0" : "#202124",
  };

  const contextData = {
    showHistory,
    setShowHistory,
    phoneNumber,
    setPhoneNumber,
    valid,
    setValid,
    phoneList,
    setPhoneList,
    backgroundStyle,
    textStyle,
    buttonBackgroundStyle,
    buttonTextStyle,
    borderColorStyle,
  };

  return (
    <AppContext.Provider value={contextData}>
      <View style={{ ...backgroundStyle, ...styles.topContainer }}>
        <View style={styles.titleButtonContainer}>
          {showHistory ? (
            <Text style={{ ...textStyle, ...styles.title }}>
              Show Phone List History Page
            </Text>
          ) : (
            <Text style={{ ...textStyle, ...styles.title }}>
              Simple Phone Validation Page
            </Text>
          )}
          <View style={styles.isDarkButtonContainer}>
            <TouchableOpacity
              style={{ ...buttonBackgroundStyle, ...styles.isDarkButton }}
              onPress={handleDarkMode}
            >
              {isDarkMode ? (
                <Text style={{ ...buttonTextStyle, ...styles.isDarkText }}>
                  White
                </Text>
              ) : (
                <Text style={{ ...buttonTextStyle, ...styles.isDarkText }}>
                  Black
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ ...backgroundStyle, ...styles.MainContainer }}>
        {showHistory ? <History /> : <PhoneNumber />}
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 70,
  },
  MainContainer: {
    flex: 1,
    alignItems: "center",
  },
  isDarkButtonContainer: {
    paddingRight: 20,
  },
  isDarkButton: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  isDarkText: {
    fontSize: 12,
  },
  titleButtonContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  title: {
    fontSize: "20px",
    paddingBottom: 30,
    paddingLeft: 20,
  },
});
