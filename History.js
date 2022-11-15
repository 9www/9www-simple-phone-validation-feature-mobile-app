import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Button,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import { AppContext } from "./App";
import PhoneList from "./components/phoneList";
export default function History() {
  const {
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
  } = useContext(AppContext);

  function handlePage() {
    setShowHistory(false);
    setValid(false);
  }

  return (
    <>
      <TouchableOpacity
        style={{ ...buttonBackgroundStyle, ...styles.backButton }}
        onPress={handlePage}
      >
        <Text style={buttonTextStyle}>Back Page</Text>
      </TouchableOpacity>
      <Text style={{ ...textStyle, ...styles.listTitle }}>
        Phone Validation History
      </Text>
      <ScrollView>
        <PhoneList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 120,
    borderRadius: 5,
    marginBottom: 40,
  },
  listTitle: {
    fontSize: 18,
    paddingBottom: 20,
  },
  red: {
    color: "#AF231C",
  },
  green: {
    color: "#5dbb63",
  },
});
