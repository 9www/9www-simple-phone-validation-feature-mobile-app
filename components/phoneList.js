import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";
import { useState, useContext } from "react";
import { AppContext } from "../App";

export default function PhoneList() {
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

  const ListMap = phoneList.map((data) => (
    <View style={{ ...backgroundStyle, ...styles.listContainer }} key={data.id}>
      <Text style={{ ...textStyle, ...styles.listText }}>
        Phone Number: {data.number}{" "}
      </Text>
      <Text style={{ ...textStyle, ...styles.listText }}>
        Valid:
        {data.validation ? (
          <Text style={styles.green}>{data.validation.toString()}</Text>
        ) : (
          <Text style={styles.red}>{data.validation.toString()}</Text>
        )}
      </Text>
      <View style={{ ...borderColorStyle, ...styles.listLine }}></View>
    </View>
  ));

  return <View>{ListMap}</View>;
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 5,
    width: 250,
    height: 70,
  },
  listLine: {
    borderBottomWidth: 1,
  },
  listText: {
    fontSize: 14,
    padding: 5,
  },
  red: {
    color: "#AF231C",
  },
  green: {
    color: "#5dbb63",
  },
});
