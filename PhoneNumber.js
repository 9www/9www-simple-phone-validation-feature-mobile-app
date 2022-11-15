import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import { AppContext } from "./App";
import PhoneInput from "react-native-phone-number-input";
import parsePhoneNumber, { isValidPhoneNumber } from "libphonenumber-js";

export default function PhoneNumber() {
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

  const [isError, setIsError] = useState(false);

  function handlePhoneNumber(text) {
    setPhoneNumber(text);
  }

  function handleSubmit() {
    setIsError(false);
    setValid(false);
    const checkNumber = parsePhoneNumber(phoneNumber);

    if (checkNumber === undefined) {
      setIsError(true);
      console.log("checknumber === underfind", isError);
      setPhoneNumber("");
      return;
    }

    const newFormatNumber = checkNumber.formatInternational();
    const vaildNumber = isValidPhoneNumber(newFormatNumber);
    setValid(vaildNumber);
    console.log("vaildNumber:", vaildNumber);
    console.log("valid", valid);
    const newPhoneData = {
      id: Math.random(),
      number: phoneNumber,
      validation: vaildNumber,
    };
    setPhoneList([...phoneList, newPhoneData]);
    setPhoneNumber("");
    if (!vaildNumber) {
      setIsError(true);
      console.log("isError:", isError);
    } else {
      setShowHistory(true);
    }
  }

  return (
    <>
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode="HK"
        placeholder="Please Input your Phone Number."
        layout="first"
        onChangeFormattedText={handlePhoneNumber}
      />
      {isError ? (
        <Text style={styles.error}>* Invalid number, Please try again.</Text>
      ) : (
        <Text style={styles.error}></Text>
      )}

      <TouchableOpacity
        style={{ ...buttonBackgroundStyle, ...styles.submitButton }}
        onPress={handleSubmit}
      >
        <Text style={{ ...buttonTextStyle, ...styles.submitText }}>Submit</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    height: 40,
    width: 120,
    borderRadius: 5,
  },
  submitText: {
    fontSize: 14,
  },

  error: {
    color: "#AF231c",
    fontSize: "15px",
    paddingTop: 5,
    height: 25,
  },
});
